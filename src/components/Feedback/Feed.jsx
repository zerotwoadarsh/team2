import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Reddit from "./Reddit";
import News from "./News";
import Users from "./Users";
const Feed = () => {

  const [data, setCom] = useState("reddit");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/api/news");
        const data = await response.json();
        console.log(data)
        setCom(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <div>
      <div className=" bg-gray-100">
        <h1 className=" text-6xl font-bold text-center bg-gray-700 h-24 rounded-lg flex items-center justify-center">
          Feed
        </h1>
        <div className="flex justify-evenly h-10 bg-slate-500 items-center mb-5 rounded-lg">
          <span className=" w-1/3 hover:bg-slate-700 hover:cursor-pointer flex items-center justify-center rounded-lg h-full">
            <button onClick={()=>{setCom("reddit")}} className=" font-semibold text-white w-5">
              Reddit
            </button>
          </span>
          <span className=" w-1/3 hover:bg-slate-700 hover:cursor-pointer flex items-center justify-center rounded-lg h-full">
            <button onClick={()=>{setCom("users")}} className=" font-semibold text-white w-5">
              Users
            </button>
          </span>
          <span className=" w-1/3 hover:bg-slate-700 hover:cursor-pointer flex items-center justify-center rounded-lg h-full">
            <button onClick={()=>{setCom("news")}} className=" font-semibold text-white w-5">
              News
            </button>
          </span>
        </div>
        

      </div>
      {data=="reddit" && <Reddit/>}
      {data=="users" && <Users/>}
      {data=="news" && <News/>}
    </div>

  );
};

export default Feed;
