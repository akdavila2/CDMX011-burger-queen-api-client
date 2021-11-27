import React from "react";

export const FoodOrder = (props) => {
  let { order } = props;

  // order.orderItems.map(val=>{
  //   console.log(val.image)
  // })
//https://api-burger-heroku.herokuapp.com/order?status=Pending

  return (
    <div>
      <picture>Foto
        <img src={order.orderItems.image} alt={order.image} />
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
