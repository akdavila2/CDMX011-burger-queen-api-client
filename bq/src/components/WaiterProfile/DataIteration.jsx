import React from "react";
import FoodMenuRow from "./FoodMenu";
import setDataToEdit from "../ApiMock/CrudApiMock";
import deleteData from "../ApiMock/CrudApiMock";
const DataIteration
= ({ data }) => {
  console.log("1"+data)
  return (
    
    <>
      
          {data.length > 0 ? (
            data.map((el) => (
              // console.log('map'+el)
              <FoodMenuRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
          
    </>
  );
};

export default DataIteration;
;