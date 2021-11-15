import React, { useEffect } from "react";
import { auth, login } from "../../lib/firebase";
import logo from "../../assets/banner.png";
import hamburger from "../../assets/hamburgertwo.png";
import LoginForm from "./LoginForm";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert2";
import { onAuthStateChanged } from "firebase/auth";
const Login = () => {
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/WaiterProfile");
        const uid = user.uid;
        console.log("active user", uid);
      } else {
        navigate("/");
        console.log("user not active");
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
        new SweetAlert("Error", error.message, "error");
        // setError(error.message);
        // setTimeout(() => setError(""), 1500);
      }
    }
  };
  return (
    <div className="content">
      <div className="container__Login">
        <header className="logo">
          <img src={logo} alt="logoBQ" />
        </header>
        <section className="column">
          <img className="img__hamburger" src={hamburger} alt="logoBQ" />
        </section>
        <section className="column">
          <div className="login__form">
            <LoginForm handleSubmit={handleSubmit} />
            {/* <div className="error__section">{error}</div> */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
