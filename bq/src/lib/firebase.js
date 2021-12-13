/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const logout = () => signOut(auth);

export const register = async (email, password, rol) => {
  const infoUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).then((userFirebase) => {
    return userFirebase;
  });

  console.log(infoUser.user.uid);
  const docRef = doc(firestore, `users/${infoUser.user.uid}`);
  setDoc(docRef, { email: email, rol: rol });
};
