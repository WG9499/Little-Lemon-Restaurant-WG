import React from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard.js";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="Feedback">
      <h2 className="title">What our customers say!</h2>
      <div className="cards">
        <FeedbackCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Norman"
          testimonial="Was grate experience! The food was delicious and the service was exceptional."
        />
        <FeedbackCard
          rating={4}
          customerImg="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Alexander"
          testimonial="Me and my family and we were very pleased with everything, and we will definitely back again."
        />
        <FeedbackCard
          rating={3}
          customerImg="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Arnold"
          testimonial="Overall it was an amazing dining experience for me and my girlfriend, and we might redoit again"
        />
        <FeedbackCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          customerName="Leona"
          testimonial="The variety of dishes and the kindness of chefs make it an excellent experience. I will highly recommend it to my friends."
        />
      </div>
    </div>
  );
};

export default Feedback;
