import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 25px auto;
  align-items: center;
  column-gap: 8px;
  img {
    width: 25px;
    margin-bottom: 0;
  }
`;

const NotionStyleList = ({ imgSrc, children }: any) => (
  <Wrap>
    <img src={imgSrc} alt="" />
    <span>{children}</span>
  </Wrap>
);

export default NotionStyleList;
