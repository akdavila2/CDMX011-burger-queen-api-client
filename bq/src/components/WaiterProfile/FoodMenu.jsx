import React from 'react';

export const FoodMenu = ({el}) => {
     let { name , image} = el; 
    return (
        
        <div className= "content-menu">
            <picture className="content__img">
                <img className="imag-menu" src={image} alt="proof" />
            </picture>
            <p className= "title__food">{name}</p>
        </div>   
     
    )
}

