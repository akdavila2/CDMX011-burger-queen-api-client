import React from "react";
// import proof from "../../assets/menusandwich.png"

const FoodMenu = ({el}) => {
  console.log('quien soy'+el)
  let { name , image} = el;
  return (
    <>

        <div className= "content__menu">
            <picture className="content__img">
                <img className="imag__menu" src={image} alt="proof" />
            </picture>
            
            <p className= "title__food">{name}</p>
        </div>

      </>
  );
};
export default FoodMenu;