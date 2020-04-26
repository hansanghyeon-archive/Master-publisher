import React from 'react';
import {
  FlowChartWithState,
  INodeDefaultProps,
} from '@mrblenny/react-flow-chart';
import styled from 'styled-components';

const DarkBox = styled.div`
  position: absolute;
  padding: 30px;
  background: #3e3e3e;
  color: white;
  border-radius: 10px;
`;

const Circle = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d30000;
  color: white;
  border-radius: 50%;
`;

const Layout = styled.div`
  padding: 16px;
  width: calc(100% - 16px);
  height: 100%;
  position: absolute;
  z-index: 0;
  background: #e0e7e7;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
  + svg {
    z-index: 1;
  }
`;

const Test = styled.div`
  width: 986px;
  text-align: center;
  height: 1.4rem;
`;

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 * You'll need to add {...otherProps} so the event listeners are added to your component
 */
const NodeCustom = React.forwardRef(
  (
    { node, children, ...otherProps }: INodeDefaultProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    if (node.type === 'output-only') {
      return (
        <DarkBox ref={ref} {...otherProps}>
          {children}
        </DarkBox>
      );
    }
    if (node.type === 'what-is-spa') {
      const { properties }: any = node;
      return (
        <Test ref={ref} {...otherProps}>
          {properties?.title}
        </Test>
      );
    }
    if (node.type === 'layout') {
      return (
        <Layout ref={ref} {...otherProps}>
          {children}
        </Layout>
      );
    }
    return (
      <Circle ref={ref} {...otherProps}>
        {children}
      </Circle>
    );
  },
);

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  .react-draggable[tabindex='0'] {
    width: 100%;
    & > svg {
      z-index: 2;
    }
  }
`;

type props = {
  data: any;
};
const ReactFlowChart = ({ data }: props) => {
  return (
    <Wrap>
      <FlowChartWithState
        config={{ readonly: true, gridSize: 10, snapToGrid: true }}
        initialValue={data}
        Components={{
          Node: NodeCustom,
        }}
      />
    </Wrap>
  );
};

export default ReactFlowChart;
