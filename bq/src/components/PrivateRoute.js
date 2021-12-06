
import React , {useState} from "react";
import {  Navigate } from "react-router-dom";
// import { auth } from "../lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp} from "../lib/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import WaiterProfile from "../components/WaiterProfile/WaiterProfile"
import Login from "../components/Login/Login"

const auth2 = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const PrivateRoute=({ children })=> {

  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData fianl", userData);
    });
  }

  onAuthStateChanged(auth2, (usuarioFirebase) => {
    if (usuarioFirebase) {
      
      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });
  // const user= auth.currentUser;

  // const userFromServer = localStorage.getItem('user')

  // if (userFromServer.role == )
  let value=user;
  console.log(user)
  // return user ? children : <Navigate to="/" />;

  // return <>{user ? <WaiterProfile user={user} /> : <Login />}</>;
  // console.log(usuarioFirebase.rol)
  // return user.rol === "admin" ? <AdminView /> : <UserView />
  return value
}
export default PrivateRoute;
