import React from 'react';
// component
import CenterWrap from '@atom/wrap/Center';
import EmailInput from '.';

export default {
  title: '02. molecules/Input/Email',
  component: EmailInput,
  decorators: [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>],
};

export const standard = () => <EmailInput />;
