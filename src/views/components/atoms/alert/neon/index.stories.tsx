import React from 'react';
import styled from 'styled-components';
import Alert, { Sucess, Info, Warning, Danger } from '.';

const CenterWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  > * {
    margin-bottom: 1rem;
  }
`;

export default {
  title: '01. atoms/alert/neon',
  decorators: [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>],
};

export const preview = () => (
  <>
    <Alert>test</Alert>
    <Sucess>test</Sucess>
    <Info>test</Info>
    <Warning>test</Warning>
    <Danger>test</Danger>
  </>
);
export const primary = () => <Alert>test</Alert>;
export const sucess = () => <Sucess>test</Sucess>;
export const info = () => <Info>test</Info>;
export const waring = () => <Warning>test</Warning>;
export const danger = () => <Danger>test</Danger>;
