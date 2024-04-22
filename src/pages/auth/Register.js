import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthPagesLayout from '../../components/auth/AuthPagesLayout';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { auth, db } from '../../db/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

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
    const nameRegex = /^[a-zA-Z\s]{3,}$/;

    //Name check
    if (!nameRegex.test(user.name)) {
      newErrors = {
        ...newErrors,
        name: 'Name must be at least 3 characters long.',
      };
    }

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
          'Password must be at least 8 chars long and contain at least one uppercase, one lowercase, and a number.',
      };
    }

    // Return if there are any errors
    if (newErrors.name || newErrors.email || newErrors.password) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    // firebase user registration
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      const currentUser = auth.currentUser;
      if (currentUser) {
        await setDoc(doc(db, 'Users', currentUser.uid), {
          name: user.name,
          email: user.email,
          password: user.password,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setUser({
      name: '',
      email: '',
      password: '',
    });

    navigate('/');
  };

  return (
    <AuthPagesLayout>
      <div className="flex flex-col gap-12">
        <h2 className="my-heading text-lightest text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="my-input"
              onChange={handleInput}
              value={user.name}
              required
            />
            {errors.name && (
              <div className="text-red-500 pl-2">{errors.name}</div>
            )}
          </div>
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
              <div className=" text-red-500 pl-2">{errors.password}</div>
            )}
          </div>
          <button type="submit" className="my-btn-light w-full">
            {loading ? <LoadingSpinner /> : 'Register'}
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
          <Link className="my-btn-light w-full mt-4" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </AuthPagesLayout>
  );
}
