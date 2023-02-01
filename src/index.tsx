import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './navigation/NavigationUtils';
import { Context } from './context';


const firebaseConfig = {
  apiKey: "AIzaSyB79Fr16juBluUDdGSb51lofAWpulOvLto",
  authDomain: "newspass-b3f97.firebaseapp.com",
  projectId: "newspass-b3f97",
  storageBucket: "newspass-b3f97.appspot.com",
  messagingSenderId: "972469616104",
  appId: "1:972469616104:web:170c0df4aa8158c575b85d",
  measurementId: "G-35NSHM2HD9"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
