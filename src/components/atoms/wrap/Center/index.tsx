import React from 'react';
import styled from 'styled-components';

const Center = styled.section`
  display: grid;
  place-content: center;
  height: 100%;
  width: 100%;
  color: white;
`;

export default ({ children }: any) => <Center>{children}</Center>;
