import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { signout } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';
import { auth } from '../../db/firebase-config';

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    // sign out user
    signOut(auth);
    // update state
    dispatch(signout());
  }, [dispatch]);
  return <Navigate to="/" />;
}
