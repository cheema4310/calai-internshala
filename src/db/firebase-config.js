import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// .env Variables of Firebase Configuration
const apiKey = process.env.REACT_APP_API_KEY;
// const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
// const databaseURL = process.env.REACT_APP_DATABASE_URL;
// const projectId = process.env.REACT_APP_PROJECT_ID;
// const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
// const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
// const appId = process.env.REACT_APP_APP_ID;

// Firebase Configuration
const firebaseConfig = {
  apiKey,
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
