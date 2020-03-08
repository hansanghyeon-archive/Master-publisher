import React from 'react';
import styled from 'styled-components';
import './index.scss';

const Wrap = styled.div`
  display: grid;
  place-content: center;
  margin: 0;
  height: 100%;
`;

export const Swappy = () => {
  return (
    <Wrap>
      <div className="loader" />
    </Wrap>
  );
};

export default {
  title: '01. atoms/loader/swappy',
  component: Swappy,
};
