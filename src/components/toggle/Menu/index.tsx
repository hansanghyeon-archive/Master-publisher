import React, { useState } from 'react';
import styled from 'styled-components';
import './index.style.scss';

const StyledBtn = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  outline: none;
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
  svg {
    stroke: ${({ theme }) => theme.color.text[0]};
  }
`;

const MenuBtn = () => {
  const [active, setActive] = useState(false);
  return (
    <StyledBtn
      className={`menu ${active ? 'active' : 'inactive'}`}
      onClick={() => setActive(!active)}
    >
      <svg viewBox="0 0 64 48">
        <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37" />
        <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24" />
        <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37" />
      </svg>
    </StyledBtn>
  );
};

export default MenuBtn;
