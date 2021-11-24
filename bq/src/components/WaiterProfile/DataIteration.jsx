import React from "react";
import { FoodMenu } from "./FoodMenu";

export const DataIteration = (props) => {
  const {products, onAdd}= props
  return (
    <>
      {products.length> 0 ? (
        products.map((product) => <FoodMenu key={product.id} product={product} onAdd={onAdd} />)
      ) : (
        <tr>
          <td colSpan="3">No data</td>
        </tr>
      )}
    </>
  );
};

