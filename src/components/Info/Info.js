import React from "react";
import twochefs from "../../assets/twochefs.jpg";
import "./Info.css";

const Info = () => {
  return (
    <div className="Info" id="about">
      <div className="InfoContent">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          Little Lemon is operated by two Italian siblings, Giovanni and Luca,
          who relocated to the United States to fulfill their mutual aspiration
          of running a restaurant.
        </p>
        <p className="lead-txt">
          Giovanni draws on his family’s recipes and his culinary expertise from
          Italy to create the menu. Meanwhile, Luca handles all the marketing
          for the restaurant and spearheaded the initiative to broaden the menu,
          including dishes from various Mediterranean cuisines beyond
          traditional Italian fare.
        </p>
      </div>
      <div className="image">
        <img src={twochefs} alt="Giovanni and Luca" />
      </div>
    </div>
  );
};

export default Info;
