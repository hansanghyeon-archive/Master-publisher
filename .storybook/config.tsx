import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  * {
    outline: none;
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
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(
  require.context('../src/components', true, /\.stories\.(tsx|mdx)$/),
  module,
);
