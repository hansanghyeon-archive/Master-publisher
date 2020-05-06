import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemesProvider } from 'themeprovider-storybook';
import themes from '../src/views/styles/themes/index.stories';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #root > div {
    position: relative;
    z-index: 999;
  }
  .sbdocs-wrapper {
    min-height: 100%;
    box-sizing: border-box;
  }
  * {
    outline: none;
    font-family: 'Noto Sans','Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }
  body, .sbdocs-wrapper, .sbdocs-preview {
    background-color: ${({ theme }: any) => theme?.color.bg[1]};
    color: ${({ theme }: any) => theme?.color.text[0]};
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
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addDecorator(withThemesProvider(themes));
configure(
  require.context('../src/views/components', true, /\.stories\.(tsx|mdx)$/),
  module,
);
