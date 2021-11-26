import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, login } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import SweetAlert from "sweetalert2";
import LoginForm from "./LoginForm";
import Footer from "../Footer/Footer";
import logo from "../../assets/banner.png";
import hamburger from "../../assets/hamburgertwo.png";




const Login = () => {
  console.log(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/WaiterProfile");
        const uid = user.uid;
        console.log("entry", uid);
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (email, password) => {
    const user = auth.currentUser;
    if (user) {
      navigate("/WaiterProfile");
    } else {
      try {
        await login(email, password);
        navigate("/WaiterProfile");
      } catch (error) {
        console.error(error);
        new SweetAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "Ok",
          cancelButtonColor: "#FF4848",
          background: "#FAEEE0"
        });

      }
    }
  };
  return (
    <div className="container__Login">
      <header className="logo">
        <img id="img-logo" src={logo} alt="logoBQ" />
      </header>
      <section className="column">
        <img className="img__hamburger" src={hamburger} alt="logoBQ" />
      </section>
      <section className="column">
        <div className="login__form">
          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Login; 

