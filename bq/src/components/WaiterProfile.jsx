import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../lib/firebase";
const WaiterProfile = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout(auth);
      console.log("saliendo de app");
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log("saliendo de app");
    }
  };

  return (
    <>
      <div className="error__section">{error}</div>
      <p>Hello</p>
      <button onClick={handleLogout}></button>
    </>
  );
};
export default WaiterProfile;
