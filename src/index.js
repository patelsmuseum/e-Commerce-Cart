import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCE-Hoc5p2dcFqhyDbAMYLIXFeTweQuKGw",
  authDomain: "cart-842e7.firebaseapp.com",
  projectId: "cart-842e7",
  storageBucket: "cart-842e7.appspot.com",
  messagingSenderId: "96645372008",
  appId: "1:96645372008:web:58c0c713297b05470983dd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export {firebaseApp , firestore};

