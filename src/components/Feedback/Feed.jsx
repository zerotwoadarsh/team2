import React from "react";
import Card from "./Card";
const Feed = () => {
  const Feedback = [
    {
      name: "Tarun Mehta",
      location: "Delhi",
      discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, illum quas atque at sapiente animi dolores laboriosam distinctio tempore temporibus praesentium iusto soluta accusamus perferendis impedit cumque assumenda expedita iste voluptate enim maiores sunt dicta! Quod sint modi pariatur, autem culpa cumque dolor soluta facilis.",
      FIR: "http://facebook.com",
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Feedback Info
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
