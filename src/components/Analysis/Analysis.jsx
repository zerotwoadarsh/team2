import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Charts = () => {
  const chartRefs = {
    barChart: useRef(null),
    horizontalBarChart: useRef(null),
    pieChart: useRef(null),
  };

  useEffect(() => {
    // Fetch data from API
    fetch('http://localhost:3000/api/analysis')
      .then(response => response.json())
      .then(data => {
        createBarChart(chartRefs.barChart.current, data.typeCounts.slice(0, 5)); // Top 5 types
        createHorizontalBarChart(chartRefs.horizontalBarChart.current, data.locationCounts.slice(0, 10)); // Top 10 states
        createPieChart(chartRefs.pieChart.current, data.sectorCounts.slice(0, 5)); // Top 5 sectors
      });
  }, []);

  const createBarChart = (container, data) => {
    const margin = { top: 20, right: 20, bottom: 80, left: 70 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    d3.select(container).selectAll("*").remove();

    const svg = d3.select(container)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map(d => d._id))
      .range([0, width])
      .padding(0.3);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .nice()
      .range([height, 0]);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "rotate(-45)")
        .attr("text-anchor", "end")
        .attr("dx", "-0.5em")
        .attr("dy", "0.15em")
        .style("font-size", "12px")
        .style("fill", "#333")
        .style("font-family", "Arial, sans-serif");

    svg.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("x", -50)
      .attr("y", -10)
      .attr("fill", "#000")
      .style("font-family", "Arial, sans-serif")
      .text("Count");

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d._id))
      .attr("y", d => y(d.count))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.count))
      .style("fill", (d, i) => color(i));

    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -6)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .style("font-family", "Arial, sans-serif")
      .text("Top 5 Cyber Attack Types");
  };

  const createHorizontalBarChart = (container, data) => {
    const margin = { top: 20, right: 20, bottom: 120, left: 150 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    d3.select(container).selectAll("*").remove();

    const svg = d3.select(container)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .nice()
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(data.map(d => d._id))
      .range([0, height])
      .padding(0.2);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    svg.append("g")
      .call(d3.axisLeft(y))
      .selectAll("text")
        .style("font-size", "12px")
        .style("fill", "#333")
        .style("font-family", "Arial, sans-serif");

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .append("text")
      .attr("x", width / 2)
      .attr("y", 40)
      .attr("fill", "#000")
      .style("font-family", "Arial, sans-serif")
      .text("Count");

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", d => y(d._id))
      .attr("width", d => x(d.count))
      .attr("height", y.bandwidth())
      .style("fill", (d, i) => color(i));

    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -6)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .style("font-family", "Arial, sans-serif")
      .text("Top 10 States with Most Cyber Attacks");
  };

  const createPieChart = (container, data) => {
    const radius = Math.min(400, 400) / 2;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = radius * 2 + margin.left + margin.right;
    const height = radius * 2 + margin.top + margin.bottom;

    d3.select(container).selectAll("*").remove();

    const svg = d3.select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.count)
      .sort(null);

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const arcHover = d3.arc()
      .outerRadius(radius - 5)
      .innerRadius(0);

    const dataReady = pie(data);

    svg.selectAll(".arc")
      .data(dataReady)
      .enter().append("g")
      .attr("class", "arc")
      .on("mouseover", function(event, d) {
        d3.select(this).select("path").transition().duration(200).attr("d", arcHover);
      })
      .on("mouseout", function(event, d) {
        d3.select(this).select("path").transition().duration(200).attr("d", arc);
      })
      .append("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data._id))
      .style("stroke", "#fff")
      .style("stroke-width", "2px");

    svg.selectAll(".arc")
      .append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .style("text-anchor", "middle")
      .style("font-size", "12px")
      .style("font-family", "Arial, sans-serif")
      .text(d => d.data._id);

    svg.append("text")
      .attr("x", 0)
      .attr("y", radius+10)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .style("font-family", "Arial, sans-serif")
      .text("Top 5 Sectors according to numbers of cyber Threats");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Cyber Attack Analysis</h1>
      <div className="flex flex-wrap gap-40">
        <div ref={chartRefs.barChart} className="p-4 w-fit h-fit border-4 rounded-lg"></div>
        <div ref={chartRefs.horizontalBarChart} className="p-4 w-fit h-fit border-4 rounded-lg"></div>
        <div ref={chartRefs.pieChart} className="p-4 w-fit h-fit border-4 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Charts;
