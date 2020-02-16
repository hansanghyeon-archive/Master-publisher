import React from 'react';
import SMD from '@atom/FramerMotion/StyledMotionDiv';
import Wrap from '@atom/FramerMotion/Wrap';

const KeyFrame = () => {
  const animate = {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  };
  const transition = {
    duration: 2,
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1],
    loop: Infinity,
    repeatDelay: 1,
  };
  const customStyle = {
    background: 'linear-gradient(180deg, #d309e1 0%, rgb(156, 26, 255) 100%)',
  };
  return (
    <Wrap style={customStyle}>
      <SMD animate={animate} transition={transition} />
    </Wrap>
  );
};

export default KeyFrame;
