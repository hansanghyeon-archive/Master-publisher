import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

// components
import CenterWrap from '@/wrap/Center';
import Diglett from './index';

export default {
  title: 'Diglett',
  component: Diglett,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const label = 'Rendering Component';
  const options = {
    Demo1: 'Demo1',
    Demo2: 'Demo2',
    Demo3: 'Demo3',
    hidden: 'hidden',
  };
  const defaultValue = 'Demo1';
  const groupId = 'GROUP-ID1';

  const props = {
    type: radios(label, options, defaultValue, groupId),
  };
  return <Diglett {...props} />;
};
