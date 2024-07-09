import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

      // 添加一个用于显示数字的文本元素
    const tooltip = svg.append('text')
      .attr('class', 'tooltip')
      .style('opacity', 0);
    const x = d3.scaleLinear()
      .domain([2010, 2015])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 1])
      .range([height, 0]);

    const line = d3.line()
      .x(d => x(d.year))
      .y(d => y(d.value));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .attr('d', line);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

      // 添加交互效果，显示数字
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.year))
      .attr('cy', d => y(d.value))
      .attr('r', 5)
      .attr('fill', 'black')
      .on('mouseover', (event, d) => {
        tooltip.transition()
          .duration(200)
          .style('opacity', 0.9);
        tooltip.html(`Year: ${d.year}, Value: ${d.value}`)
          .attr('x', x(d.year) + 10)
          .attr('y', y(d.value) - 10);
      })
      .on('mouseout', () => {
        tooltip.transition()
          .duration(200)
          .style('opacity', 0);
      });
  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default LineChart;
