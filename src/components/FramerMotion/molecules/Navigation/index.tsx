import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MenuItem from '@FM/atom/MenuItem';

const StyledUl = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  left: 0;
  width: 230px;
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2, 3, 4];
const Navigation = () => (
  <StyledUl variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </StyledUl>
);

export default Navigation;
