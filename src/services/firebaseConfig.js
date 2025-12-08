import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcS4gcVIRP2KEw0XrPqqNteH69rLGmVNA",
  authDomain: "velavita-ebfba.firebaseapp.com",
  projectId: "velavita-ebfba",
  storageBucket: "velavita-ebfba.firebasestorage.app",
  messagingSenderId: "751793458206",
  appId: "1:751793458206:web:b02ea97df9bba0e1e3720f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
