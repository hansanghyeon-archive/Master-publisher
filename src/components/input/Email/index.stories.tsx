import React from 'react';
import { withPreview } from 'storybook-addon-preview';
// component
import CenterWrap from '@/wrap/Center';
import EmailInput from '.';
import previews from './previews';

export default {
  title: 'Input/Email',
  component: EmailInput,
  decorators: [
    withPreview,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => <EmailInput />;
standard.parameters = {
  preview: previews,
};
