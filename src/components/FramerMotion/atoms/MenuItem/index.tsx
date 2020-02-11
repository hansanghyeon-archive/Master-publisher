import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
`;
const Text = styled.div`
  border-radius: 5px;
  width: 20px;
  height: 20px;
  flex: 1;
`;
const StyledLi = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem = ({ i }: any) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <StyledLi
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon style={style} />
      <Text style={style} />
    </StyledLi>
  );
};

export default MenuItem;
