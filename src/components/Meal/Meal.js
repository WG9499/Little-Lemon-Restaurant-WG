import React from "react";
import Submit from "../Submit/Submit.js";
import MealCard from "../MealCard/MealCard.js";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";
import "./Meal.css";

const Meal = () => {
  return (
    <div className="Meal" id="menu">
      <div className="MealTop">
        <h1>This week's specials!</h1>
        <Submit>Online Menu</Submit>
      </div>
      <div className="MealCards">
        <MealCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <MealCard
          imageUrl={bruchetta}
          title="Bruchetta"
          price={7.99}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <MealCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={6.99}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </div>
  );
};

export default Meal;
