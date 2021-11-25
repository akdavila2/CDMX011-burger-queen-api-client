import React from "react";

const MenuOption = (prop) => {
  let {setTypeFood}=prop;
  return (
    <form className="content-menu-option">
    <h3>Menu</h3>
    <section className="section__option">
      <button
        className="secondary-button"
        onClick={(e) => {e.preventDefault();
          setTypeFood("Breakfast");
        }}
      >
        Breakfast
      </button>
      <button
        className="secondary-button"
        onClick={(e) => {e.preventDefault();
          setTypeFood("Lunch");
        }}
      >
        Lunch
      </button>
    </section>
  </form>
  );
};
export default MenuOption;
