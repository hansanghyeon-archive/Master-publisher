import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import CenterWrap from '@atom/wrap/Center';
import DownloadButton from '.';

export default {
  title: '01. Atoms/Button/Download',
  component: DownloadButton,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  return <DownloadButton />;
};
