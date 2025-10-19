import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="bg-white border-4 border-white  shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 w-[300px]">
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] object-cover rounded-t-lg"
      />
      <p className="text-center font-semibold py-2">{title}</p>
    </div>
  );
};

export default Card;
