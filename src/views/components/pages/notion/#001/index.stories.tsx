import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
import COMPONENT from '.';

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
