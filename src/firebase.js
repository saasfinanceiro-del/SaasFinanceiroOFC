import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6GZbf7n8Rb8549pya_vgGV8oztQc33lI",
  authDomain: "ugroup-financas.firebaseapp.com",
  projectId: "ugroup-financas",
  storageBucket: "ugroup-financas.firebasestorage.app",
  messagingSenderId: "844815204870",
  appId: "1:844815204870:web:6c9f447eeb5af764307987",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const fb = {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
};
