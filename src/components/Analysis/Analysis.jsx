import React from 'react';
import BarChart from "././Charts/BarChart"

const Analysis = () => {
    const data = [25, 30, 45, 60, 20, 65, 75];

    return (
        <div className="App">
            <h1>Bar Chart with D3.js and React</h1>
            <BarChart data={data} />
        </div>
    );
};

export default Analysis;
