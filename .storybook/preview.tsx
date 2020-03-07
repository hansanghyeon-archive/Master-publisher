import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemesProvider } from 'themeprovider-storybook';
import themes from '../src/views/styles/themes';

const GlobalStyle = createGlobalStyle`
  html, body, #root, #docs-root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .sbdocs-wrapper {
    height: 100%;
    box-sizing: border-box;
  }
  * {
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
  }
  body {
    background-color: ${({ theme }: any) => theme?.color.bg[0]};
  }
`;

addParameters({
  docs: {
    container: ({ context, children }) => (
      <DocsContainer context={{ ...context }}>
        <GlobalStyle />
        {children}
      </DocsContainer>
    ),
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

addDecorator(withThemesProvider(themes));
