import React, { useEffect, useState } from 'react';
import Card from './Card';

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
    }, []); // Empty array ensures this runs only once on mount

    return (
        <div>
            {data.map((feedback) => (
                <Card
                    key={feedback.id} // Ensure 'id' or another unique identifier is used
                    name={feedback.title}
                    location={feedback.location} // Assuming you have a 'location' field
                    description={feedback.body}
                    FIR={feedback.url} // Ensure you have a 'FIR' field or adjust as needed
                />
            ))}
        </div>
    );
}

export default Users;
