import React from 'react';
import ThemeProvider, { ThemeList } from '@style/themes';
import { Wrap, ImgWrap } from './index.style';

interface Props {
  imgSrc?: string;
  children: React.ReactNode;
  theme?: keyof typeof ThemeList;
}

const NotionStyleListItem = ({ imgSrc, children, theme }: Props) => (
  <ThemeProvider theme={theme}>
    <Wrap>
      <ImgWrap>
        {imgSrc ? (
          <img src={imgSrc} alt="" />
        ) : (
          <span role="img" aria-label="page">
            📄
          </span>
        )}
      </ImgWrap>
      <div>
        <span>{children}</span>
      </div>
    </Wrap>
  </ThemeProvider>
);

export default NotionStyleListItem;
