import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3_001 = () => {
  const Root = useRef<HTMLDivElement>(null);
  const Svg = useRef<SVGSVGElement>(null);
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
      const MockDataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
      const svgWidth = 500;
      const svgHeight = 300;
      const barPadding = 5;
      const barWidth = svgWidth / MockDataset.length;

      const svg = d3
        .select(Svg.current)
        .attr('width', svgWidth)
        .attr('height', svgHeight);

      // const barChart =
      svg
        .selectAll('rect')
        .data([80, 100, 56, 120, 180, 30, 40, 120, 160])
        .enter()
        .append('rect')
        .attr('y', (d) => svgHeight - d)
        .attr('height', (d) => d)
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
        .text((d) => d)
        .attr('y', (d) => svgHeight - d - 2)
        .attr('x', (d, i) => barWidth * i)
        .attr('fill', '#A64C38');
    })();
  }, []);
  return (
    <>
      <div ref={Root} />
      <svg ref={Svg} />
    </>
  );
};

export default D3_001;
