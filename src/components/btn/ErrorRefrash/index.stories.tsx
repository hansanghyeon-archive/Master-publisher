import React from 'react';
import styled from 'styled-components';
// components
import CenterWrap from '@/wrap/Center';
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
  title: 'components/Button/ErrorRefrash',
  component: ErrorRefrashBtn,
  decorators: [
    (storyFn: any) => (
      <CenterWrap>
        <WidthWrap>{storyFn()}</WidthWrap>
      </CenterWrap>
    ),
  ],
};

export const standard = () => <ErrorRefrashBtn />;
