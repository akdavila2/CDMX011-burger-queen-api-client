import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp.js";

import DataIteration from "../WaiterProfile/DataIteration";
import PreLoad from "../PreLoad/PreLoad";
import NotFound from "../NotFound/NotFound";
//import CrudApi from "../CrudApi/CrudApi";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer/Footer";
import { OrderSummary } from "./OrderSummary";
// import CrudApiMock from "../ApiMock/CrudApiMock";


const WaiterProfile = () => {
  const [db, setDb] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [typeFood, setTypeFood] = useState('Breakfast');

  let url = `http://localhost:5000/product?type=${typeFood}`;

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);


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
            {/* <MenuOption /> */}
            <div className="content-menu-option">
              <h3>Menu</h3>
              <section className="section__option">
                <button className="secondary-button" onClick={()=>{setTypeFood('Breakfast')}}>Breakfast</button>
                <button className="secondary-button" onClick={()=>{setTypeFood('Lunch')}}>Lunch</button>
              </section>
            </div>
            <div className="container-food">
              {/* <CrudApiMock /> */}
              {loading && <PreLoad />}
              {error && <NotFound />}
              {db && <DataIteration data={db} />}
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
