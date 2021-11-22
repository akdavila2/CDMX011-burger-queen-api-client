import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp.js";

import DataIteration from "../WaiterProfile/DataIteration";
import PreLoad from "../PreLoad/PreLoad";
// import Loader from "./Loader";
// import Message from "./Message";

const CrudApiMock = () => {
  const [db, setDb] = useState(null);
//   const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // let api = helpHttp();
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

  // const deleteData = (id) => {}
  // const setDataToEdit = (id) => {}
  return (
    <div>
      
        {loading && <PreLoad />}
        {/* {error && (
          // <Message
          //   msg={`Error ${error.status}: ${error.statusText}`}
          //   bgColor="#dc3545"
          // />
        )} */}
        {db && (
          <DataIteration
            data={db}
          />
        )}
    </div>
  );
};

export default CrudApiMock;