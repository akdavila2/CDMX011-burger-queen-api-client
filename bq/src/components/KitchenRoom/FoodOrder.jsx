import React from "react";

export const FoodOrder = (props) => {
  let { order } = props;

  return (
    <div>
      <picture>
        <img src={order.image} alt={order.image} />
      </picture>
      <p>ID: {order.id}</p>
      <p>Customer: {order.userName}</p>
      <p>Date: {order.dateOrder}</p>
      <button
        onClick={() => {
          console.log("clicking");
        }}
      >Ready</button>
    </div>
  );
};
