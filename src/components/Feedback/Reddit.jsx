import React, { useEffect, useState } from 'react';
import Card from './Card';

const Reddit = () => {
    const url = "https://team2backend-production.up.railway.app/api/getRedditPost";
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
        <div className='p-4 justify-center flex flex-wrap gap-4 bg-gray-200'>
            {data.map((feed) => (
                <Card
                    key={feed.id} 
                    name={feed.title}
                    body={feed.body}
                    url={feed.url}
                    sec={feed.created}
                />
            ))}
        </div>
    );
}

export default Reddit;
