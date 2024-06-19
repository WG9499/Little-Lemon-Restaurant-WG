import React from "react";
import { useNavigate } from "react-router-dom";
import Submit from "../Submit/Submit.js";
import restaurant_food from "../../assets/restaurantfood.jpg";
import "./Restaurant.css";

const Restaurant = () => {
  const navigate = useNavigate();

  return (
    <div className="Restaurant">
      <div className="RestaurantContent">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          We are family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Submit
          onClick={() => navigate("/bookings")}
          aria-label="Go to reservation table page."
        >
          Reserve a Table
        </Submit>
      </div>
      <div className="RestaurantImage">
        <img src={restaurant_food} alt="Restaurant Food" />
      </div>
    </div>
  );
};

export default Restaurant;
