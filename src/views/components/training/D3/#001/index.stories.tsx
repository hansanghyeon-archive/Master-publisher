import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
import D3_001 from '.';

export default {
  title: '99. training/D3/001',
  component: D3_001,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => <D3_001 />;
