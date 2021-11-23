import React, { useState } from "react";
import iconEmail from "../../assets/email.png";
import iconPassword from "../../assets/password.png";

const LoginForm = ({ handleSubmit }) => {
  const [state, setState] = useState({});
  const handleEmail = (e) => setState({ ...state, email: e.target.value });
  const handlePassword = (e) =>
    setState({ ...state, password: e.target.value });

  const { email, password } = state;

  return (
    <form className="form"  onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(email, password);
    }}>
      <div className="input__form">
        <img className="icon" src={iconEmail} alt="iconEmail" />
        <input
          type="email"
          placeholder="Write your Email"
          onChange={handleEmail}
        />
      </div>
      <div className="input__form">
        <img className="icon" src={iconPassword} alt="iconPassword" />
        <input
          type="password"
          placeholder="Write your Password"
          onChange={handlePassword}
        />
      </div>
      <button
        className="primary-button"
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
