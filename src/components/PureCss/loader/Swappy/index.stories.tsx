import React from 'react';
import styled from 'styled-components';
import './index.scss';

const Wrap = styled.div`
  display: grid;
  place-content: center;
  margin: 0;
  height: 100vh;
`;

export const Swappy = () => {
  return (
    <Wrap>
      <div className="loader" />
    </Wrap>
  );
};

export default {
  title: 'Pure css/loader/swappy',
  component: Swappy,
};
