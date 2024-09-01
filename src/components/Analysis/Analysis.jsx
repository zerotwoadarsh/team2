import React, { useState, useRef, useCallback, useEffect } from 'react';
import BarChart from './Charts/BarChart';
import Modal from './Modal';

const Analysis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [dataSet, setDataSet] = useState([]); 
  const timeoutRef = useRef(null);
  const chartRef = useRef(null);

  

  const url = "http://localhost:3000/api/analysis";

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched data:", data);

        // Convert the data to an array of objects for the chart
        const processedData = [
          { label: 'Type', data: data.typeCounts },
          { label: 'Location', data: data.locationCounts },
          { label: 'Sector', data: data.sectorCounts }
        ];

        setDataSet(processedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);


  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Bar Chart with D3.js and React</h1>
      <div className="flex flex-wrap gap-4">
        {dataSet.map((data, i) => (
          <div
            key={i}
            ref={chartRef}
            className="relative p-4 cursor-pointer hover:opacity-80"
          >
            <BarChart data={data.data} />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
};

export default Analysis;
