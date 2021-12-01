import React, {useEffect, useState} from "react";
import { helpHttp } from "../../helpers/helpHttp";
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

      
  const updateData = (data) => {
    let {status, id, orderItems, total, userName, dateOrder, hoursOrder, hoursFinish }=data;
    let endpoint = `https://api-burger-heroku.herokuapp.com/order/${data.id}`;
    // console.log(endpoint);
console.log(status, id);
    let options = {
      body:( {id, orderItems, total, userName, status:"Delivering", dateOrder, hoursOrder, hoursFinish}),
      headers: { "content-type": "application/json" },
    };
    console.log(data)
    console.log('soyUpdate')

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
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
