import React from "react";

//import { auth } from "../../lib/firebase";
import iconUser from "../../assets/user.png";
import iconClock from "../../assets/clock.png";
export const FoodOrder = (props) => {
  let { order, updateData } = props;
  const date = new Date();
  // const user =  auth.currentUser;
  // console.log("user is",  user.uid);
  console.log(
    "hora actual",
    date.toLocaleTimeString(),
    "hora orden",
    order.hoursOrder,
    "resta horas",
    order.hoursOrder - date.toLocaleTimeString()
  );
  return (
    <div className="content-order">
      <header>
        <div className="content-profile">
          <img className="icon" src={iconUser} alt="iconUser" />
          <p>{order.userName}</p>
        </div>
        <div className="content-profile">
          <img className="icon" src={iconClock} alt="iconClock" />
          <p>{order.hoursOrder}</p>
        </div>
        <div className="content-profile">
          <img className="icon" src={iconUser} alt="iconUser" />
          <p>Flor</p>
          {/* <p>{user.email}</p> */}
        </div>
      </header>
      <section className="content-products">
        {order.orderItems.map((val) => {
          return (
            <section key={val.id} className="content-items">
              <div className="img-qty">
                <img className="img-order" src={val.image} alt={val.image} />
                <p>{val.qty}</p>
              </div>
              <p id="food-name">{val.name}</p>
            </section>
          );
        })}
      </section>
      <section className="action-btn">
        <button
          className="secondary-button"
          onClick={() => {
            console.log("clicking");
            console.log(updateData())
            updateData(order);
          }}
        >
          Ready
        </button>
      </section>
    </div>
  );
};
