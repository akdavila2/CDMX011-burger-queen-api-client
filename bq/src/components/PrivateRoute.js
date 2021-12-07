import { useState } from "react";
import { auth, firestore } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
//import { Home } from "./Administrator/Home";
import Login from "./Login/Login";
//import { UserRegister } from './Administrator/UserRegister';

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  const getRol = async (uid) => {
    const docRef = doc(firestore, `users/${uid}`);
    const docCipher = await getDoc(docRef);
    const infoFinish = docCipher.data().rol;
    return infoFinish;
  };

  const setUserWithFirebaseAndRol = (userFirebase) => {
    getRol(userFirebase.uid).then((rol) => {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData finish", userData);
    });
  };

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      if (!user) {
        setUserWithFirebaseAndRol(userFirebase);
      }
    } else {
      setUser(null);
    }
  });

  let value = user;
  console.log("im value", { value });
  return <>{user ? children : <Login />}</>;
};
export default PrivateRoute;
