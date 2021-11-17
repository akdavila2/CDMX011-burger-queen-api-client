import React from "react";
import img from "../../assets/notfound.png";
import Footer from "../Footer/Footer";
const NotFound = () => {
  return (
    <>
      <div className="container__notfound">
        <img src={img} alt="error" />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default NotFound;
