import React from "react";
import { FoodMenu } from "./FoodMenu";

const DataIteration = ({ filterOption }) => {
  console.log("1" + data);
  return (
    <>
      {filterOption.length > 0 ? (
        filterOption.map((el) => (
          // console.log('map'+el)

          <FoodMenu key={el.id} el={el} />
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
