import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DiglettRoot = styled.div`
  background-color: ${({ theme: { color } }) => color.bg[1]};
  overflow: hidden;
  position: relative;
`;
export const MoveWrap = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;

export const Demo1 = styled.div`
  background: black;
  width: 150px;
  height: 150px;
`;

export const Demo2 = styled.div`
  background: pink;
  width: 150px;
  height: 150px;
`;
export const Demo3 = styled.div`
  background: green;
  width: 150px;
  height: 150px;
`;
