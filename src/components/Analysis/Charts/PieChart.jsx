import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = (data) => {
  const svgRef = useRef();
  console.log(data);
  useEffect(() => {
    const data = [12,3,4,5,6,7,8,9,10];
    
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    
    const pie = d3.pie();

    
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    
    const arcs = svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    
    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => d3.schemeCategory10[i]);

    
    arcs.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('fill', 'white')
      .text(d => d.data);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default PieChart;
