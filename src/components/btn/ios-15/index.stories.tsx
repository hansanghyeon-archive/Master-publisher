import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CenterWrap from '@/wrap/Center';
import Ios15Btn from '.';

export default {
  title: 'Button/ios-15',
  component: Ios15Btn,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => <Ios15Btn />;
