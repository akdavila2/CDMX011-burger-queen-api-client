/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { helpHttp } from "../../../helpers/helpHttp.js";
//import SweetAlert from "sweetalert2";
import NavBarWaiter from "../../NavBar.jsx/NavBarWaiter";
import Footer from "../../Footer/Footer";
import PreLoad from "../../PreLoad/PreLoad";
import { NotFound } from "http-errors";
import { OrdersIteration } from "./OrdersIteration";

export const ReadyOrders = () => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let url = `https://api-burger-heroku.herokuapp.com/order`;
  let api = helpHttp();
  useEffect(() => {
    const endpoint = `${url}?waiterName=waiter@burgerqueen.com&status=Delivering`;
    setLoading(true);
    api.get(endpoint).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  const deleteData = async (id) => {
    console.log("id de order is ", id)
    let isDelete = window.confirm(
      `¿Are you sure to delete the record with the id '${id}'?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      const response = await api.del(endpoint, options);
      if (!response.err) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        setError(response);
      }
    } else {
      return;
    }
  };

  const closeOrder = (order) => {
    const close = db.filter((item) => item.id !== order.id);
    setDb(close);
  };

  return (
    <>
      <div className="content-kitchenRoom">
        <NavBarWaiter />
        <div className="container-food">
          {loading && <PreLoad />}
          {error && <NotFound />}
          {db && (
            <OrdersIteration
              orders={db}
              deleteData={deleteData}
              closeOrder={closeOrder}
            />
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
