import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Feed = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/api/news");
        const data = await response.json();
        console.log(data)
        setData(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className=" text-6xl font-bold text-center bg-gray-700 h-24 rounded-lg flex items-center justify-center">
        Feed
      </h1>
      <div className="flex justify-evenly h-10 bg-slate-500 items-center mb-5 rounded-lg">
        <span className=" w-1/3 hover:bg-slate-700 hover:cursor-pointer flex items-center justify-center rounded-lg h-full">
          <button className=" font-semibold text-white w-5">
            <Link to="/">Reddit</Link>
          </button>
        </span>
        <span className=" w-1/3 hover:bg-slate-700 hover:cursor-pointer flex items-center justify-center rounded-lg h-full">
          <button className=" font-semibold text-white w-5">
            <Link to="/">User</Link>
          </button>
        </span>
        <span className=" w-1/3 hover:bg-slate-700 hover:cursor-pointer flex items-center justify-center rounded-lg h-full">
          <button className=" font-semibold text-white w-5">
            <Link to="/">News</Link>
          </button>
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((feedback) => (
          <Card
            key={feedback.title}
            name={feedback.title}
            location={feedback.title}
            discription={feedback.description}
            FIR={feedback.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
