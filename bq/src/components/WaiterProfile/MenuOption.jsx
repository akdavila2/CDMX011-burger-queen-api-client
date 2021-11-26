import React from "react";

const MenuOption = (prop) => {
  let {setTypeFood}=prop;
  return (
    <div className="content-menu-option">
    <h3>Menu</h3>
    <section className="section__option">
      <button
        className="secondary-button"
        onClick={() => {
          setTypeFood("Breakfast");
        }}
      >
        Breakfast
      </button>
      <button
        className="secondary-button"
        onClick={() => {
          setTypeFood("Lunch");
        }}
      >
        Lunch
      </button>
    </section>
  </div>
  );
};
export default MenuOption;
