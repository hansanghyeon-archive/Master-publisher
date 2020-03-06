import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 25px auto;
  align-items: center;
  column-gap: 4px;
  img {
    width: 25px;
  }
`;

export default ({ imgSrc, children }: any) => (
  <Wrap>
    <img src={imgSrc} alt="" />
    <span>{children}</span>
  </Wrap>
);
