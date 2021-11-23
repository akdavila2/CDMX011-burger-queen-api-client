import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer/Footer";
import { OrderSummary } from "./OrderSummary";
import NotFound from "../NotFound/NotFound";
import PreLoad from "../PreLoad/PreLoad";
import DataIteration from "./DataIteration";

const WaiterProfile = () => {
  const [db, setDb] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState("Breakfast");

  let url = "http://localhost:5000/product";

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

 const filterOption = () => {
   return db.filter((items) => items.type === menu);
 };

  return (
    <div>
      <div className="content__waiter__profile">
        <NavBar />
        <div className="container__menu">
          <section className="column__container">
            <OrderSummary />
          </section>
          <section className="column__container">
            <div className="content-menu-option">
              <h3>Menu</h3>
              <section className="section__option">
                <button className="secondary-button" onClick={setMenu("Breakfast")}>Breakfast</button>
                <button className="secondary-button" onClick={setMenu("Lunch")}>Lunch</button>
              </section>
            </div>
            <div className="container-food">
              <>
                {loading && <PreLoad />}
                {error && <NotFound />}
                {db && <DataIteration data={filterOption()} />}
              </>
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
