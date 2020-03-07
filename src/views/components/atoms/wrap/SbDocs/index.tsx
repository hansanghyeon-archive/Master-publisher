import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
`;

interface Props {
  children?: React.ReactNode;
}
const SbDocs = ({ children }: Props) => <Wrap>{children}</Wrap>;

export default SbDocs;
