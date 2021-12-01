import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [ready, setReady] = useState(false);
  const [route, setRoute] = useState(false);
  const n= useNavigate;
  const navigate = (route) => {
    setRoute(route);
    n(route);
  };
  useEffect(() => {
    console.log(2);
    onAuthStateChanged(auth, (user) => {
      setReady(true);
      if (!user) return navigate("/");
      if (window.location.pathname === "/") return navigate("/WaiterProfile");
    });
    // eslint-disable-next-line
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  const value = {
    login,
    logout,
    ready,
    user: auth.currentUser,
    auth,
    navigate,
    route
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
