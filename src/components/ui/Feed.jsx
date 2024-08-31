import React from "react";
import Card from "./Card";
const Feed = () => {
  const Feedback = [
    {
      name: "Tarun Mehta",
      location: "Delhi",
      discription: "edfsadfs",
      FIR: "http://facebook.com",
    },
  ];

  return (
    <div>
      <h1 className=""> Feedback info</h1>
      <div className="grid grid-cols-1 gap-6 py-4 mt-5 sm:grid-cols-2 lg:grid-cols-4">
        {Feedback.map((feedback, i) => (
          <Card
            key={i}
            name={feedback.name}
            location={feedback.location}
            discription={feedback.discription}
            FIR={feedback.FIR}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
