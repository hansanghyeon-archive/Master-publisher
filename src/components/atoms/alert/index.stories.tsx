import React from 'react';
import styled from 'styled-components';
import Alert, { Sucess, Info, Warning, Danger } from '.';

const CenterWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
`;

export default {
  title: 'Atoms/alert',
  component: Alert,
};

export const primary = () => (
  <CenterWrap>
    <Alert>test</Alert>
  </CenterWrap>
);
export const sucess = () => (
  <CenterWrap>
    <Sucess>test</Sucess>
  </CenterWrap>
);
export const info = () => (
  <CenterWrap>
    <Info>test</Info>
  </CenterWrap>
);
export const waring = () => (
  <CenterWrap>
    <Warning>test</Warning>
  </CenterWrap>
);
export const danger = () => (
  <CenterWrap>
    <Danger>test</Danger>
  </CenterWrap>
);
