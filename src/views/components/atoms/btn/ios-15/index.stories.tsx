import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CenterWrap from '@atom/wrap/Center';
import Ios15Btn from '.';

export default {
  title: '01. atoms/Button/ios-15',
  component: Ios15Btn,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => <Ios15Btn />;
