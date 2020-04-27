import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3_001 = () => {
  const Root = useRef<HTMLDivElement>(null);
  const Svg = useRef<SVGSVGElement>(null);
  const Svg2 = useRef<SVGSVGElement>(null);
  useEffect(() => {
    // Train: Creating a Simple Bar Chart
    (() => {
      const MockDataset = [1, 2, 3, 4, 5];
      d3.select(Root.current)
        .selectAll('p')
        .data(MockDataset)
        .enter()
        .append('p')
        // .text('D3 is awesome!!');
        .text((d) => d);
    })();

    // Train: Creating a Simple Bar Chart
    (() => {
      // const MockDataset= [80, 100, 56, 120, 180, 30, 40, 120, 160];
      const MockDataset = [1, 2, 3, 4, 5];
      const svgWidth = 500;
      const svgHeight = 300;
      const barPadding = 5;
      const barWidth = svgWidth / MockDataset.length;

      const svg = d3
        .select(Svg.current)
        .attr('width', svgWidth)
        .attr('height', svgHeight);

      // Train: Scales
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(MockDataset)])
        .range([0, svgHeight]);

      // const barChart =
      svg
        .selectAll('rect')
        .data(MockDataset)
        .enter()
        .append('rect')
        .attr('y', (d) => svgHeight - yScale(d))
        .attr('height', (d) => yScale(d))
        .attr('width', barWidth - barPadding)
        .attr('transform', (d, i) => {
          const translate = [barWidth * i, 0];
          return `translate(${translate})`;
        });

      // Train: Creating Labels
      // const text =
      svg
        .selectAll('text')
        .data(MockDataset)
        .enter()
        .append('text')
        .text((d) => yScale(d))
        .attr('y', (d) => svgHeight - yScale(d) + 20)
        .attr('x', (d, i) => barWidth * i + 4)
        .attr('fill', '#A64C38');
    })();

    // Train: Axes
    (() => {
      const MockDataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
      const svgWidth = 500;
      const svgHeight = 300;

      const svg = d3
        .select(Svg2.current)
        .attr('width', svgWidth)
        .attr('height', svgHeight);

      const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(MockDataset)])
        .range([0, svgHeight]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(MockDataset)])
        .range([0, svgHeight]);

      const xAxis = d3.axisBottom().scale(xScale);
      const yAxis = d3.axisLeft().scale(yScale);

      svg.append('g').attr('transform', 'translate(50, 10)').call(yAxis);

      const xAxisTranslate = svgHeight - 20;

      svg
        .append('g')
        .attr('transform', `translate(50, ${xAxisTranslate})`)
        .call(xAxis);
    })();
  }, []);
  return (
    <>
      <div ref={Root} />
      <br />
      <svg ref={Svg} />
      <br />
      <svg ref={Svg2} />
    </>
  );
};

export default D3_001;
