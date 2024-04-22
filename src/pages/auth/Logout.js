import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

export default function Logout() {
  useEffect(() => {
    // sign out user
  }, []);
  return <Navigate to="/" />;
}
