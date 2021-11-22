import React from "react";
import iconDelete from "../../assets/eliminar.png";

export const OrderSummary = () => {
  return (
    <div className="content__order__summary">
      <section className="name__user">
        <input className="name" placeholder="Add Customer Name" required></input>
      </section>
      <section className="summary">
        <p>1</p>
        <p>Cafe Americano</p>
        <p>$5.00</p>
        <img className="icon" src={iconDelete} alt="iconDelete" />
      </section>
      <div className="summary-total">
        <button className="secondary-button">Send Order</button>
        <h2 className="total">Total: $5.00</h2>
      </div>
    </div>
  );
};
