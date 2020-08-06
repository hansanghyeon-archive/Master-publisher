import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

// components
import CenterWrap from '@atom/wrap/Center';
import Diglett from './index';

export default {
  title: '02. molecules/Diglett',
  component: Diglett,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  return <Diglett />;
};
