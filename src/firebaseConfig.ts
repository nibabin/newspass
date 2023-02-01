import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


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

export default app;