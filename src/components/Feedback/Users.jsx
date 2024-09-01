import React, { useEffect, useState } from 'react';

const Users = () => {
    const url = "http://localhost:3000/api/userpost";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className='p-4 flex justify-center flex-wrap gap-4 bg-gray-200'>
            {data.map((post) => (
                <div key={post._id} className="flex flex-col overflow-hidden gap-2 bg-gray-50 shadow-sm rounded-lg w-[600px]">
                <div className="max-h-1/2 p-4 flex flex-col gap-2">
                    <div className="p-2">
                        <h2 className="text-xl font-bold text-gray-800">{post.fullName}</h2>
                        <pre className="whitespace-pre-wrap overflow-auto max-h-80  leading-normal  mt-2 text-base text-gray-600">
                            {post.cyberThreatDescription}
                        </pre>
                    </div>
                    <div className="flex justify-between self-stretch px-6">
                        <a href={post.FIRLink} className="border-2 rounded-lg p-2">
                            FIR LINK
                        </a>
                        <div>
                            {post.cyberAttackType}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Users;
