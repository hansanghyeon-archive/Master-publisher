import React from 'react';
import SMD from '@FM/atom/StyledMotionDiv';
import Wrap from '@FM/atom/Wrap';

const Scale = () => {
  const animated = {
    scale: 2,
  };
  const transition = {
    duration: 0.5,
  };
  const customStyle = {
    background: 'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
  };
  return (
    <Wrap style={customStyle}>
      <SMD animate={animated} transition={transition} />
    </Wrap>
  );
};

export default Scale;
