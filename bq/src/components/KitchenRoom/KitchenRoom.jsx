import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer/Footer";
import PreLoad from "../PreLoad/PreLoad";
import { NotFound } from "http-errors";
import { OrderIteration } from "./OrderIteration";
export const KitchenRoom = ({ order }) => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [dataToEdit, setDataToEdit] = useState(null);

  let url = `https://api-burger-heroku.herokuapp.com/order?status=Pending`;
  let api = helpHttp();
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
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

  const updateData = async (order) => {
    const date = new Date();
    console.trace("soy order", order);

    let endpoint = `https://api-burger-heroku.herokuapp.com/order/${order.id}`;
    //console.log(endpoint);

    let options = {
      body: {
        status: "delivering",
        hoursFinish: date.toLocaleTimeString(),
      },
      headers: { "content-type": "application/json" },
    };

    const response = await api.put(endpoint, options);
    if (response.err) {
      return setError(response);
    }
    let newData = db.map((el) => (el.id === order.id ? order : el));
    setDb(newData);

  };

  return (
    <>
      <div className="content-kitchenRoom">
        <NavBar />

        <div className="container-food">
          {loading && <PreLoad />}
          {error && <NotFound />}
          {db && <OrderIteration orders={db} updateData={updateData} />}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
