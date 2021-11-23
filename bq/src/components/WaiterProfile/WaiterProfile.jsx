import React from "react";
//import CrudApi from "../CrudApi/CrudApi";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer/Footer";
import { MenuOption } from "./MenuOption";
import { OrderSummary } from "./OrderSummary";
import CrudApiMock from "../ApiMock/CrudApiMock";
const WaiterProfile = () => {
  return (
    <div>
      <div className="content__waiter__profile">
        <NavBar />
        {/* <CrudApi /> */}

        <div className="container__menu">
          <section className="column__container">
            <OrderSummary />
          </section>
          <section className="column__container">
            <MenuOption />
            <div className="container-food">
              <CrudApiMock />
            </div>
          </section>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default WaiterProfile;
