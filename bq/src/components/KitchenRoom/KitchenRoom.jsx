import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import SweetAlert from "sweetalert2";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer/Footer";
import PreLoad from "../PreLoad/PreLoad";
import { NotFound } from "http-errors";
import { OrderIteration } from "./OrderIteration";
export const KitchenRoom = () => {

  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [dataToEdit, setDataToEdit] = useState(null);

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

  //       const date = new Date();
  //       const llegada = new Date('2021-12-01T01:25:08.923Z');
  //       var today = new Date();
  //     // const finish=date.toLocaleTimeString();
  //     // console.log( today- llegada )
  //     var diffMs = (new Date- llegada );
  //     var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  // var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  //       console.log(diffHrs+":" + diffMins)

  const updateData = (data) => {
    const { status, id, orderItems, total, userName, dateOrder, hoursFinish } = data;
    const endpoint = `https://api-burger-heroku.herokuapp.com/order/${data.id}`;
    const llegada = new Date(data.dateOrder);
    var diffMs = (new Date - llegada);
    // var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    const tiempoTardo = diffMins;//minutos

    // console.log(endpoint);
    // console.log(status, id);
    let options = {
      body: ({ id, orderItems, total, userName, status: "Delivering", dateOrder, hoursFinish: new Date() }),
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        new SweetAlert({
          title: 'This order took ' + tiempoTardo + ' minutes.',
          showConfirmButton: true,
          confirmButtonColor: "#FF4848",
          background: "#FAEEE0",
        });
      } else {
        setError(res);
      }
    });
  };


  return (
    <>
      <div className="content-kitchenRoom">
        <NavBar />

        <div className="container-food">
          {loading && <PreLoad />}
          {error && <NotFound />}
          {db && <OrderIteration orders={db}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit} />}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>

    </>
  );
};
