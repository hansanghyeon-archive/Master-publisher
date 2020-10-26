import React from 'react';
import { Wrap, ImgWrap } from './style';

type NotionStyleListItemProps = {
  imgSrc?: string;
  children: React.ReactNode;
};

const NotionStyleListItem: React.FC<NotionStyleListItemProps> = ({
  imgSrc,
  children,
}: NotionStyleListItemProps) => (
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
NotionStyleListItem.defaultProps = { imgSrc: undefined };

export default NotionStyleListItem;
