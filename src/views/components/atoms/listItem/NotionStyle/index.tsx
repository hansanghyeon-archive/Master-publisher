import React from 'react';
import { Wrap, ImgWrap } from './index.style';

interface Props {
  imgSrc?: string;
  children: React.ReactNode;
}

const NotionStyleListItem = ({ imgSrc, children }: Props) => (
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
);

export default NotionStyleListItem;
