import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
import COMPONENT from '.';
import ReactFlowChart from './ReactFlowChart';

export default {
  title: 'notion 🗃/SPA란?',
  component: COMPONENT,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const props = {
    data: {
      title: 'Tranditional Page Lifecycle',
      label: ['Initial Request', 'HTML 📄', 'Form POST', 'HTML 📄'],
    },
  };
  return <COMPONENT {...props} />;
};
standard.story = {
  name: 'Tranditional Page Lifecycle',
};

export const standard2 = () => {
  const props = {
    data: {
      title: 'SPA Lifecycle',
      label: ['Initial Request', 'HTML 📄', 'AJAX', '{...} JSON'],
    },
  };
  return <COMPONENT {...props} />;
};
standard2.story = {
  name: 'SPA Lifecycle',
};

export const standard3 = () => {
  const data = {
    offset: {
      x: 0,
      y: 0,
    },
    nodes: {
      nodeLayout: {
        id: 'nodeLayout',
        type: 'layout',
        position: {
          x: 8,
          y: 8,
        },
        ports: {
          port1: {},
        },
      },
      node1: {
        id: 'node1',
        type: 'output-only',
        position: {
          x: 300,
          y: 100,
        },
        ports: {
          port1: {
            id: 'port1',
            type: 'output',
            properties: {
              value: 'yes',
            },
          },
          port2: {
            id: 'port2',
            type: 'output',
            properties: {
              value: 'no',
            },
          },
        },
      },
      node2: {
        id: 'node2',
        type: 'input-output',
        position: {
          x: 300,
          y: 300,
        },
        ports: {
          port1: {
            id: 'port1',
            type: 'input',
          },
          port2: {
            id: 'port2',
            type: 'output',
          },
        },
      },
      nodeTitle: {
        id: 'nodeTitle',
        type: 'what-is-spa',
        position: {
          x: 0,
          y: 24,
        },
        properties: {
          title: 'Tranditional Page Lifecycle',
        },
        ports: {
          port1: {
            id: 'port1',
            type: 'right',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port2',
            type: 'right',
            properties: {
              custom: 'property',
            },
          },
        },
      },
    },
    links: {
      link1: {
        id: 'link1',
        from: {
          nodeId: 'node1',
          portId: 'port2',
        },
        to: {
          nodeId: 'node2',
          portId: 'port1',
        },
      },
    },
    selected: {},
    hovered: {},
  };
  return <ReactFlowChart data={data} />;
};
