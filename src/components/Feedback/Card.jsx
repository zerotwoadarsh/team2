import React from "react";

const Card = ({ name, body, url, sec }) => {
    return (
        <div className="flex flex-col overflow-hidden gap-2 transition-transform transform text bg-gray-50 shadow-sm rounded-lg max-w-1/2">
            <div className="w-full max-h-1/2 p-4 flex flex-col gap-2 items-start">
                <div className="p-2">
                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    <pre className="whitespace-pre-wrap overflow-auto max-h-80  leading-normal  mt-2 overflow-y-scroll text-base text-gray-600">
                        {body}
                    </pre>
                </div>
                <div className="flex justify-between self-stretch px-6">
                    <a href={url} className="border-2 rounded-lg p-2">
                        source
                    </a>
                    <div>
                        {new Date(sec * 1000).toLocaleString("en-GB", {
                            timeZone: "UTC",
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
