import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@src/components/styles/style.css';

library.add(fab);

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  * {
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

addParameters({
  backgrounds: [
    { name: 'dark', value: '#232326', default: true },
    { name: 'light', value: '#fff' },
  ],
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    showRoots: true,
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
