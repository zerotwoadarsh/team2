import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {

   console.log(data);
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return; // Handle empty data case

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous chart

        const width = 500;
        const height = 300;

        // Set up scales
        const xScale = d3.scaleBand()
                         .domain(data.map((_, i) => i))
                         .range([0, width])
                         .padding(0.4);

        const yScale = d3.scaleLinear()
                         .domain([0, d3.max(data)])
                         .nice()
                         .range([height, 0]);

        // Add the x-axis
        svg.append('g')
           .call(d3.axisBottom(xScale).tickFormat(i => i + 1)) // Format to start at 1
           .attr('transform', `translate(0, ${height})`)
           .style('font-size', '12px');

        // Add the y-axis
        svg.append('g')
           .call(d3.axisLeft(yScale))
           .style('font-size', '12px');

        // Draw bars
        svg.selectAll('.bar')
           .data(data)
           .join('rect')
           .attr('class', 'bar')
           .attr('x', (d, i) => xScale(i))
           .attr('y', d => yScale(d))
           .attr('width', xScale.bandwidth())
           .attr('height', d => height - yScale(d))
           .attr('fill', 'orange');

    }, [data]);

    return <svg ref={svgRef} width={500} height={300}></svg>;
};

export default BarChart;
