import React from 'react';
import SMD from '@FM/atom/StyledMotionDiv';
import Wrap from '@FM/atom/Wrap';

const ScaleAnimation = () => {
  const animated = {
    scale: 2,
  };
  return (
    <Wrap>
      <SMD animate={animated} />
    </Wrap>
  );
};

export default ScaleAnimation;
