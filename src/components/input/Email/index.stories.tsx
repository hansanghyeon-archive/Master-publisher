import React from 'react';
// component
import CenterWrap from '@/wrap/Center';
import EmailInput from '.';

export default {
  title: 'components/Input/Email',
  component: EmailInput,
  decorators: [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>],
};

export const standard = () => <EmailInput />;
