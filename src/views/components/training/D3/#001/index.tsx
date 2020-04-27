import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3_001 = () => {
  const Root = useRef<HTMLDivElement>(null);
  const Heaing = useRef<HTMLDivElement>(null);
  useEffect(() => {
    d3.select(Heaing.current)
      .style('color', 'red')
      .attr('class', 'heading')
      .text('Updated h1 tag');
    d3.select(Root.current).append('p').text('First Paragraph');
    d3.select(Root.current).append('p').text('Second Paragraph');
    d3.select(Root.current).append('p').text('Third Paragraph');

    d3.selectAll('p').style('color', 'blue');
  }, []);
  return (
    <div ref={Root}>
      <h1 ref={Heaing}>Frist D3</h1>
    </div>
  );
};

export default D3_001;
