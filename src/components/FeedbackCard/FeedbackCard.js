import React from "react";
import "./FeedbackCard.css";

const FeedbackCard = ({
  rating,
  customerImg,
  customerName,
  testimonial,
  ...props
}) => {
  const stars = {
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★",
  };

  return (
    <div className="FeedbackCard">
      <span className="rating">{stars[rating]}</span>
      <span className="customer">
        <img src={customerImg} alt={customerName} />
        <span className="highlight">{customerName}</span>
      </span>
      <p className="testimonial highlight">{testimonial}</p>
    </div>
  );
};

export default FeedbackCard;
