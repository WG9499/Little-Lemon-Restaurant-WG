import React from "react";
import deliveryIcon from "../../assets/deliveryIcon.svg";
import "./MealCard.css";

const MealCard = ({ imageUrl, title, price, description, ...props }) => {
  return (
    <div className="MealCard" {...props}>
      <img className="MealCardImage" src={imageUrl} alt={title} />
      <div className="MealCardHeader">
        <span className="cardt-title">{title}</span>
        <span className="MealCardPrice highlight">${price}</span>
      </div>
      <p className="MealCardBody">{description}</p>
      <div className="MealCardCallToAction">
        <button className="highlight">Order a delivery</button>
        <img src={deliveryIcon} alt="Delivery" />
      </div>
    </div>
  );
};

export default MealCard;
