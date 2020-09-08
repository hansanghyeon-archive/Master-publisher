import React from 'react';
import styled from 'styled-components';
import { withPreview } from 'storybook-addon-preview';
//
import CenterWrap from '@/wrap/Center';
import previews from './previews/index';
// components
import ErrorRefrashBtn from '.';

const WidthWrap = styled.div`
  width: 64px;
  height: 64px;
  background-color: #fe2946;
  border-radius: 8px;
  svg,
  img {
    width: 100%;
  }
`;

export default {
  title: 'Button/ErrorRefrash',
  component: ErrorRefrashBtn,
  decorators: [
    withPreview,
    (storyFn: any) => (
      <CenterWrap>
        <WidthWrap>{storyFn()}</WidthWrap>
      </CenterWrap>
    ),
  ],
};

export const standard = () => <ErrorRefrashBtn />;
standard.parameters = {
  preview: previews,
};
