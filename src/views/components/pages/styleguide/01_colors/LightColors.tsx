import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ColorPreview from '@atom/wrap/ColorPreview';
import lightModeTheme from '@style/4log/lightModeTheme';

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
  background-color: ${props => props.theme.color.primary};
`;
const PrimaryDarkColorPreview = styled(ColorPreview)`
  background-color: ${props => props.theme.color.primaryLight};
`;

const LightColors = () => (
  <ThemeProvider theme={lightModeTheme}>
    <Ul>
      <Li>
        <PrimaryColorPreview />
        <span>Primary</span>
      </Li>
      <Li>
        <PrimaryDarkColorPreview />
        <span>Primary Light</span>
      </Li>
    </Ul>
  </ThemeProvider>
);

export default LightColors;
