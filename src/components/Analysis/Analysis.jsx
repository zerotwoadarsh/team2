import React, { useState, useEffect } from 'react';
import BarChart from './Charts/BarChart';

const Analysis = () => {
  const [dataSet, setDataSet] = useState({});
  const [chartData, setChartData] = useState([]);
  const url = "http://localhost:3000/api/analysis";

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Check the fetched data

        // Convert the data to an array of numbers
        const processedData = {
          Type: data.typeCounts,
          Location: data.locationCounts,
          Sector: data.sectorCounts
        };

        console.log("Processed Data:", processedData); // Check processed data
        setDataSet(processedData);
        setChartData(processedData['Type']); // Default to 'Type'
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Bar Chart with D3.js and React</h1>
      <div className="flex flex-wrap gap-4">
        <div className="relative p-4 cursor-pointer hover:opacity-80">
          <BarChart data={chartData.Type} />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
