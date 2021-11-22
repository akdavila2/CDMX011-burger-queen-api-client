import React from "react";
// import CrudApi from "../CrudApi/CrudApi";
import Footer from "../Footer/Footer"
import NavBar from "../NavBar.jsx/NavBar";
import FoodMenu from "../ApiMock/CrudApiMock"
const WaiterProfile = () => {
  return (
    <>

      {/* <NavBar />
      <CrudApi /> */}
      <div class="container__waiter">
        <header> <NavBar /></header>

        <div class="waiter-content">
          <div id="comanda">
            <p> menu desayuno o comida</p>
            {/* <p>comanda<CrudApi /></p> */}
          </div>
          <div id="menus"> 
          <FoodMenu/>
          </div>
        </div>
        <footer><Footer /></footer>

      </div>

    </>
  );
};
export default WaiterProfile;
