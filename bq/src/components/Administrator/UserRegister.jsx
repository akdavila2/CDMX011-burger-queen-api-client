import React from "react";
import SweetAlert from "sweetalert2";
import { register } from "../../lib/firebase";
import iconEmail from "../../assets/email.png";
import iconPassword from "../../assets/password.png";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar.jsx/NavBar";
export const UserRegister = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;
    try {
      await register(email, password, rol);
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
        background: "#FAEEE0",
      });
    }
  };

  return (
    <>
      <div className="container-register">
        <NavBar />
        <section className="register-form">
          <div>
            <form onSubmit={submitHandler}>
              <div className="input__form">
                <img className="icon" src={iconEmail} alt="iconEmail" />
                <input
                  type="email"
                  id="email"
                  placeholder="write email"
                  required
                />
              </div>
              <div className="input__form">
                <img className="icon" src={iconPassword} alt="iconPassword" />
                <input
                  type="password"
                  id="password"
                  placeholder="write password"
                  required
                />
              </div>
              <select id="rol" required>
                <option value="0">Rol</option>
                <option value="admin">Administrator</option>
                <option value="chef">Chef</option>
                <option value="waiter">Waiter</option>
              </select>
              <button className="register-button">Register </button>
            </form>
          </div>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
