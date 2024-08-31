import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
                      .attr('width', 500)
                      .attr('height', 300)
                      .style('overflow', 'visible')
                      .style('margin-top', '50px');

        // Setting the scaling
        const xScale = d3.scaleBand()
                         .domain(data.map((val, i) => i))
                         .range([0, 500])
                         .padding(0.4);

        const yScale = d3.scaleLinear()
                         .domain([0, d3.max(data)])
                         .range([300, 0]);

        // Setting the axes
        const xAxis = d3.axisBottom(xScale).ticks(data.length);
        const yAxis = d3.axisLeft(yScale).ticks(5);

        svg.append('g')
           .call(xAxis)
           .attr('transform', 'translate(0, 300)')
           .style('font-size', '20px');

        svg.append('g')
           .call(yAxis)
           .style('font-size', '20px');

        // Setting the bars
        svg.selectAll('.bar')
           .data(data)
           .join('rect')
           .attr('x', (d, i) => xScale(i))
           .attr('y', yScale)
           .attr('width', xScale.bandwidth())
           .attr('height', val => 300 - yScale(val))
           .attr('fill', 'orange');

    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default BarChart;
