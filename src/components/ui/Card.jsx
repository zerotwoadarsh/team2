import React from "react";

// interface FeedbackProps {
//   name: string;
//   location: string;

// }

const Card = ({ name, location, discription, FIR }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-72">
        <div className="mt-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-base text-custom-green">{location}</p>
          <p className="text-base text-custom-green">{discription}</p>
        </div>
        <a href={FIR} className="object-cover w-full h-full mb-4 rounded-xl" target="_blank"> FIR link </a>
      </div>
    </div>
  );
};

export default Card;
