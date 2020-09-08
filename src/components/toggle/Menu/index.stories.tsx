import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MenuBtn from '.';

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default {
  title: 'Toggle/Menu',
  component: MenuBtn,
};

export const standard = () => (
  <>
    <GlobalStyle />
    <MenuBtn />
  </>
);
