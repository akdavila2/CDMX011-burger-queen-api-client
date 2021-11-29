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

    let url = `https://api-burger-heroku.herokuapp.com/order?status=Pending`;
    // let api = helpHttp();
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


  return (
    <>
      <div className="content-kitchenRoom">
        <NavBar />
     
        <div className="container-food">
              {loading && <PreLoad />}
              {error && <NotFound />}
              {db && <OrderIteration orders={db}  />}
            </div>
        </div>
        <footer>
          <Footer />
        </footer>
     
    </>
  );
};
