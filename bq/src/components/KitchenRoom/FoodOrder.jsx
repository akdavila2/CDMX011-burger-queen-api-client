import React from "react";
//import { auth } from "../../lib/firebase";
import iconUser from "../../assets/user.png";
import iconClock from "../../assets/clock.png";

export const FoodOrder = (props) => {
  let { order } = props;
  // const user = auth.currentUser;

  const date = new Date();
  console.log("date 1", date);
  const dateToday = date.toDateString();

  console.log("date", dateToday);
  console.log(typeof order.id);

  //https://api-burger-heroku.herokuapp.com/order?status=Pending

  return (
    <div className="content-order">
      <header>
        <div className="content-profile">
          <img className="icon" src={iconUser} alt="iconUser" />
          <p>{order.userName}</p>
        </div>
        <div className="content-profile">
          <img className="icon" src={iconClock} alt="iconClock" />
          <p>10:00</p>
        </div>
        <div className="content-profile">
          <img className="icon" src={iconUser} alt="iconUser" />
          <p>Flor</p>
        </div>
      </header>
      <section className="content-products">
        {order.orderItems.map((val) => {
          return (
            <section className="content-items">
              <div className="img-qty">
                <img className="img-order" src={val.image} alt={val.image} />
                <p>{val.qty}</p>
              </div>
              <div>
                <p>{val.name}</p>
              </div>
            </section>
          );
        })}
      </section>

      <button className="secondary-button"
        onClick={() => {
          console.log("clicking");
        }}
      >
        Ready
      </button>
    </div>
  );
};
