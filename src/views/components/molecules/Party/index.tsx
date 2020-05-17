import React, { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

const Physics2DPlugin = require('../../../../../static/Physics2DPlugin3.min.js');

gsap.registerPlugin(Physics2DPlugin);
function particles(
  parent: { appendChild: (arg0: HTMLDivElement) => void },
  quantity: number,
  y: any,
  minAngle: unknown[],
  maxAngle: any,
  width: number,
) {
  const colors = ['#FFFF04', '#EA4C89', '#892AB8', '#4AF2FD', '#275EFE'];
  for (let i = quantity - 1; i >= 0; i -= 1) {
    const angle = gsap.utils.random(minAngle, maxAngle);
    const velocity = gsap.utils.random(70, 100);
    const dot = document.createElement('div');
    dot.style.setProperty('--b', colors[Math.floor(gsap.utils.random(0, 5))]);
    parent.appendChild(dot);
    gsap.set(dot, {
      x: gsap.utils.random(width * -0.5, width * 0.5),
      y: y,
      scale: gsap.utils.random(0.4, 0.8),
    });
    gsap
      .timeline({
        onComplete() {
          dot.remove();
        },
      })
      .to(dot, {
        duration: 1.7,
        rotationX: `-=${gsap.utils.random(180, 720)}`,
        rotationZ: `+=${gsap.utils.random(180, 720)}`,
        physics2D: {
          angle: angle,
          velocity: velocity,
        },
      })
      .to(
        dot,
        {
          duration: 0.7,
          opacity: 0,
        },
        1,
      );
  }
}

const Wrap = styled.div`
  background-color: pink;
  padding: 1rem;
  position: relative;
`;
const Emitter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateZ(-4px);
  div {
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 2px;
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    background: var(--b, none);
  }
`;

const Party = () => {
  const Test = useRef<HTMLButtonElement>(null);
  const EmitterTarget = useRef<HTMLDivElement>(null);
  const _handleClick = () => {
    setTimeout(
      () =>
        particles(
          EmitterTarget.current,
          100,
          0,
          0,
          360,
          EmitterTarget.current?.offsetWidth,
        ),
      160,
    );
  };
  return (
    <Wrap>
      <Emitter ref={EmitterTarget} />
      <button type="button" ref={Test} onClick={_handleClick}>
        test
      </button>
    </Wrap>
  );
};

export default Party;
