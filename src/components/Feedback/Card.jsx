import React from "react";

const Card = ({ name, location, discription, FIR }) => {
  return (
    <div className="flex flex-col overflow-hidden transition-transform transform bg-white shadow-lg rounded-xl hover:-translate-y-2 hover:shadow-2xl">
      <div className="w-full h-72">
        <div className="p-2">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="mt-2 text-base text-custom-green">{location}</p>
          <p className="h-40 mt-2 overflow-y-scroll text-base text-gray-600">{discription}</p>
        </div>
        <a
          href={FIR}
          className="inline-block px-1 py-1 mt-1 mb-1 ml-6 font-medium text-center text-white transition-colors duration-300 bg-green-600 rounded-lg hover:bg-green-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          FIR Link
        </a>
      </div>
    </div>
  );
};

export default Card;
