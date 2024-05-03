
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const filledStars = parseInt(rating);
  const nonFilledStars = 5 - filledStars;

  return (
    <div className="rating">
      {[...Array(filledStars)].map((star, index) => (
        <FaStar key={index} color="#ff6060" />
      ))}
      {[...Array(nonFilledStars)].map((star, index) => (
        <FaRegStar key={index} color="#ff6060" />
      ))}
    </div>
  );
};

export default Rating;
