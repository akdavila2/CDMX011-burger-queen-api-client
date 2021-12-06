/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();

export const login= (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}
export const logout = () => signOut(auth);

// export const register= (email, password, rol)=> {
//    createUserWithEmailAndPassword(auth, email, password).then((usuarioFirebase) => {
//      console.log(usuarioFirebase)
//     return usuarioFirebase;
//   });
// }
