import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import CenterWrap from '@/wrap/Center';
import DownloadButton from '.';

export default {
  title: 'Button/Download',
  component: DownloadButton,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  return <DownloadButton />;
};
