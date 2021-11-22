import React from 'react';
import proof from "../../assets/menusandwich.png"

export const FoodMenu = () => {
    return (
        <div className= "content__menu">
            <picture className="content__img">
                <img className="imag__menu" src={proof} alt="proof" />
            </picture>
            <p className= "title__food">Food Name</p>
        </div>
    )
}
