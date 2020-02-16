import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Refresh from '@atom/FramerMotion/Button/Refresh';

const StyledDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;

const Wrap = ({ children, style }: any) => {
  const [refresh, setRefresh] = useState(0);
  return (
    <>
      <StyledDiv style={style}>
        {React.cloneElement(children, { key: refresh })}
      </StyledDiv>
      <Refresh onClick={() => setRefresh(refresh + 1)} />
    </>
  );
};

export default Wrap;
