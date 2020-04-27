import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3_001 = () => {
  const Root = useRef<HTMLDivElement>(null);
  const MockDataset = [1, 2, 3, 4, 5];
  useEffect(() => {
    d3.select(Root.current)
      .selectAll('p')
      .data(MockDataset)
      .enter()
      .append('p')
      // .text('D3 is awesome!!');
      .text((d) => d);
  }, []);
  return <div ref={Root} />;
};

export default D3_001;
