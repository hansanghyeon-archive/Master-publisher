import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

addParameters({
  backgrounds: [
    { name: 'dark', value: '#232326', default: true },
    { name: 'light', value: '#fff' },
  ],
  viewport: {
    defaultViewport: 'someDefualt',
  },
});

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(
  require.context('../src/components', true, /\.stories\.tsx$/),
  module,
);
