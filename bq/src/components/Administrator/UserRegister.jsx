import React from "react";

import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { firebaseApp} from "../../lib/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
 const auth2 = getAuth(firebaseApp);

export const UserRegister = () => {

  const firestore = getFirestore(firebaseApp);

   const registrarUsuario = async (email, password, rol)=> {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth2,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

 function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

     registrarUsuario(email, password, rol);
    
  }

return(
    <div>
    {/* <h1>{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1> */}

    <form onSubmit={submitHandler}>
        
      <label>
        Email:
        <input type="email" id="email" placeholder="write email" />
      </label>

      <label>
        Password:
        <input type="password" id="password" />
      </label>

      <label>
        Rol:
        <select id="rol">
        <option value="admin">Administrator</option>
          <option value="chef">Chef</option>
          <option value="waiter">Waiter</option>
        </select>
      </label>

      <input
        type="submit"
        value="Registrar" 
      />
    </form>

    {/* <button onClick={() => setIsRegistrando(!isRegistrando)}>
      {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
    </button> */}
  </div>
);
}