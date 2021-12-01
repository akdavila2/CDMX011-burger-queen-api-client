import React from "react";
import { FoodOrder } from "./FoodOrder";
export const OrderIteration = (props) => {
  const { orders, updateData } = props;
  let output = (
    <tr>
      <td colSpan="3">No orders</td>
    </tr>
  );
  if (orders.length) {
    output = orders.map((order) => (
      <FoodOrder key={order.id} order={order} updateData={updateData} />
    ));
  }
  return <>{output}</>;
};
