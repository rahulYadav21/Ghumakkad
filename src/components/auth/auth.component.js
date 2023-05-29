import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFVnnTHI3blx6xjfUNdFt8pkXAyfK7Xao",
  authDomain: "shoppingwebsite-5a417.firebaseapp.com",
  projectId: "shoppingwebsite-5a417",
  storageBucket: "shoppingwebsite-5a417.appspot.com",
  messagingSenderId: "813790224865",
  appId: "1:813790224865:web:556e0b175298caa72272a0",
  measurementId: "G-3FHKDJ5YF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);