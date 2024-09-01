import React from "react";

const Card = ({ name, location, body, url }) => {
  return (
    <div className="flex flex-col overflow-hidden transition-transform transform bg-white shadow-lg rounded-xl hover:-translate-y-2 hover:shadow-2xl">
      <div className="w-full h-1/4">
        <div className="p-2">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="mt-2 text-base text-custom-green">{location}</p>
          <p className="h-40 mt-2 overflow-y-scroll text-base text-gray-600">{body}</p>
        </div>
        
          FIR Link
        
      </div>
    </div>
  );
};

export default Card;
