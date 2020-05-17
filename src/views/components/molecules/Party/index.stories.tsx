import React from 'react';
import { withPreview } from 'storybook-addon-preview';
// component
import CenterWrap from '@atom/wrap/Center';
import Party from '.';

export default {
  title: '02. molecules/Party',
  component: Party,
  decorators: [
    withPreview,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => <Party />;
