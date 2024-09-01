import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Reddit from "./Reddit";
import News from "./News";
import Users from "./Users";
const Feed = () => {
    const [tab, setTab] = useState("reddit");

    const buttons = ["reddit", "users", "news"];

    return (
        <div>
            <div className="flex justify-center p-2">
                <div className="flex border-2 rounded-full max-w-fit p-1 px-2">
                    {buttons.map((btn) => {
                        return (
                            <button
                                key={btn}
                                onClick={() => {
                                    setTab(btn);
                                }}
                                className={`${tab == btn ? "bg-blue-500" : ""}
                        rounded-full p-2 px-4 font-semibold`}
                            >
                                {btn}
                            </button>
                        );
                    })}
                </div>
            </div>
            {tab == "reddit" && <Reddit />}
            {tab == "users" && <Users />}
            {tab == "news" && <News />}
        </div>
    );
};

export default Feed;
