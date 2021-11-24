import React from "react";

export const FoodMenu = ( props ) => {
  let { product, onAdd } = props;

  return (
    <div
      className="content-menu"
      onClick={() => {
        console.log("clicking");  
        onAdd(product);
      }}
    >
      <picture className="content__img">
        <img className="imag-menu" src={product.image} alt={product.image} />
      </picture>
      <p className="title__food">{product.name}</p>
    </div>
  );
};
