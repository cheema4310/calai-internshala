import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMHRRkcAtPY25YRrSBXYy6T--iw_o3rUU',
  authDomain: 'uol2021.firebaseapp.com',
  databaseURL: 'https://uol2021-default-rtdb.firebaseio.com',
  projectId: 'uol2021',
  storageBucket: 'uol2021.appspot.com',
  messagingSenderId: '731624119267',
  appId: '1:731624119267:web:ae1e7953b339e735b15ed6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Firestore DB
const db = getFirestore(app);

export { app, auth, db };
