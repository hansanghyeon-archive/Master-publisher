import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemesProvider } from 'themeprovider-storybook';

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

// addDecorator(withThemesProvider(themes));

configure(
  require.context('../src/views/components', true, /\.stories\.(tsx|mdx)$/),
  module,
);
