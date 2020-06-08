import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';

const Wrap = styled.div`
  padding: 22px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  cursor: pointer;
  img {
    width: 100%;
    fill: #fff;
  }
`;

const ErrorRefrashBtn = () => {
  const [hover, setHover] = useState(false);

  // ref
  const icon = useRef(null);

  // function
  const _handleHover = () => {
    setHover(true);
    TweenMax.fromTo(
      [icon.current],
      0.8,
      { opacity: 0, rotate: 0 },
      { opacity: 1, rotate: 360 },
    );
  };
  const _handleMoudeLeave = () => {
    setHover(false);
    TweenMax.fromTo([icon.current], 0.8, { opacity: 0 }, { opacity: 1 });
  };
  return (
    <Wrap onMouseEnter={_handleHover} onMouseLeave={_handleMoudeLeave}>
      <img
        ref={icon}
        src={
          hover
            ? 'https://wp.hapas.io/wp-content/uploads/4log/icons/redo-alt-solid.svg'
            : 'https://wp.hapas.io/wp-content/uploads/4log/icons/alert.svg'
        }
        alt=""
      />
    </Wrap>
  );
};

export default ErrorRefrashBtn;
