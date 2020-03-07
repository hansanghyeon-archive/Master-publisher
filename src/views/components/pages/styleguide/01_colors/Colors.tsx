import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import ColorPreview from '@atom/wrap/ColorPreview';
import DefaultTheme from '@style/themes/4log';

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  margin-right: 20px;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 10px;
`;
const PrimaryColorPreview = styled(ColorPreview)`
  background-color: ${({ theme }) => theme.color.primary};
`;

const Colors = () => (
  <ThemeProvider theme={DefaultTheme}>
    <Ul>
      <Li>
        <PrimaryColorPreview />
        <span>Primary</span>
      </Li>
    </Ul>
  </ThemeProvider>
);

export default Colors;
