import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LoadingSpinner from '../../components/shared/LoadingSpinner';
import AuthPagesLayout from '../../components/auth/AuthPagesLayout';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../db/firebase-config';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate Inputs
    let newErrors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email Check
    if (!emailRegex.test(user.email)) {
      newErrors = {
        ...newErrors,
        email: 'Please enter a valid email address.',
      };
    }

    // Password Check
    if (!passwordRegex.test(user.password)) {
      newErrors = {
        ...newErrors,
        password:
          'password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.',
      };
    }

    // Return if there are any errors
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // firebase user log in
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      const currentUser = auth.currentUser;
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
    setUser({
      email: '',
      password: '',
    });
  };
  return (
    <AuthPagesLayout>
      <div className="flex flex-col gap-12">
        <h2 className="my-heading text-lightest text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="my-input"
              onChange={handleInput}
              value={user.email}
              required
            />
            {errors.email && (
              <div className="absolute text-red-500 pl-2">{errors.email}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="my-input"
              onChange={handleInput}
              value={user.password}
              required
            />
            {errors.password && (
              <div className="absolute text-red-500 pl-2">{errors.email}</div>
            )}
          </div>
          <button className="my-btn-light w-full">
            {loading ? <LoadingSpinner /> : 'Sign In'}
          </button>
        </form>
        <div className="flex flex-col">
          <div className="text-center relative">
            <span className="inline-block px-2 py-1 bg-darker text-lightest z-10 relative">
              OR
            </span>
            <span className="absolute top-1/2 h-0.5 bg-lighter w-full left-0 transform -translate-y-1/2"></span>
            <span className="absolute top-1/2 h-0.5 bg-lighter w-full right-0 transform -translate-y-1/2"></span>
          </div>
          <Link className="my-btn-light w-full mt-4" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </AuthPagesLayout>
  );
}
