import React, { useRef, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';
import MenuToggle from '@atom/FramerMotion/Button/MenuToggle';
import Wrap from '@atom/FramerMotion/Wrap';
import Navigation from '@molecule/FramerMotion/Navigation';

const Styled = {
  MotionNav: styled(motion.nav)`
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
  `,
  MotionBg: styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
  `,
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const Variants = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Wrap>
      <Styled.MotionNav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <Styled.MotionBg variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </Styled.MotionNav>
    </Wrap>
  );
};

export default Variants;
