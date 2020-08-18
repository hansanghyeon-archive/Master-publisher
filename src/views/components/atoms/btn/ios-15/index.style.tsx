import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

export const variavariansts = {
  duration: '7s',
  easing: 'linear',
  c: {
    color: [
      '#fff',
      rgba('#ffa31a', 0.7),
      '#1a23ff',
      '#e21bda',
      rgba('#ffe81a', 0.7),
    ],
    shadow: rgba('#ffdf57', 0.5),
    shadowInsetTop: rgba('#ffdf34', 0.9),
    shadowInsetBottom: rgba('#fffad7', 0.8),
    radialInner: '#ffd215',
    radialOuter: '#fff172',
  },
};
export const BtnRoot = styled.button`
  --duration: 7s;
  --easing: linear;
  --c-color-1: ${rgba('#ffa31a', 0.7)};
  --c-color-2: #1a23ff;
  --c-color-3: #e21bda;
  --c-color-4: ${rgba('#ffe81a', 0.7)};
  --c-shadow: ${rgba('#ffdf57', 0.5)};
  --c-shadow-inset-top: ${rgba('#ffdf34', 0.9)};
  --c-shadow-inset-bottom: ${rgba('#fffad7', 0.8)};
  --c-radial-inner: #ffd215;
  --c-radial-outer: #fff172;
  --c-color: #fff;
  outline: none;
  position: relative;
  cursor: pointer;
  border: none;
  display: flex;
  border-radius: 24px;
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.02em;
  line-height: 1.5;
  color: var(--c-color);
  background: radial-gradient(
    circle,
    var(--c-radial-inner),
    var(--c-radial-outer) 80%
  );
  box-shadow: 0 0 14px var(--c-shadow);
  &:before {
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    box-shadow: inset 0 3px 12px var(--c-shadow-inset-top),
      inset 0 -3px 4px var(--c-shadow-inset-bottom);
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 24px;
  min-width: 132px;
  padding: 12px 0;
  position: relative;
  span {
    display: inline-block;
    position: relative;
    z-index: 1;
  }
`;

const circleAnimationTemplate = (p: number[]) => keyframes`
  33% {
    transform: translate(${p[0]}px, ${p[1]}px) translateZ(0);
  }
  66% {
    transform: translate(${p[2]}px, ${p[3]}px) translateZ(0);
}
`;
const circleAnimation = [
  null,
  /* circle-1  */ circleAnimationTemplate([0, 16, 12, 64]),
  /* circle-2  */ circleAnimationTemplate([80, -10, 72, -48]),
  /* circle-3  */ circleAnimationTemplate([20, 12, 12, 4]),
  /* circle-4  */ circleAnimationTemplate([76, -12, 112, -8]),
  /* circle-5  */ circleAnimationTemplate([84, 28, 40, -32]),
  /* circle-6  */ circleAnimationTemplate([28, -16, 76, -56]),
  /* circle-7  */ circleAnimationTemplate([8, 28, 20, -60]),
  /* circle-8  */ circleAnimationTemplate([32, -4, 56, -20]),
  /* circle-9  */ circleAnimationTemplate([20, -12, 80, -8]),
  /* circle-10 */ circleAnimationTemplate([68, 20, 100, 28]),
  /* circle-11 */ circleAnimationTemplate([4, 4, 68, 20]),
  /* circle-12 */ circleAnimationTemplate([56, 0, 60, -32]),
];
export const Circle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: blur(var(--blur, 8px));
  background: var(--background, transparent);
  transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
  animation: var(--animation, none) var(--duration) var(--easing) infinite;
  &.circle-1,
  &.circle-9,
  &.circle-10 {
    --background: var(--c-color-4);
  }
  &.circle-3,
  &.circle-4 {
    --background: var(--c-color-2);
    --blur: 14px;
  }
  &.circle-5,
  &.circle-6 {
    --background: var(--c-color-3);
    --blur: 16px;
  }
  &.circle-2,
  &.circle-7,
  &.circle-8,
  &.circle-11,
  &.circle-12 {
    --background: var(--c-color-1);
    --blur: 12px;
  }
  &.circle-1 {
    --x: 0;
    --y: -40px;
    --animation: ${circleAnimation[1]};
  }
  &.circle-2 {
    --x: 92px;
    --y: 8px;
    --animation: ${circleAnimation[2]};
  }
  &.circle-3 {
    --x: -12px;
    --y: -12px;
    --animation: ${circleAnimation[3]};
  }
  &.circle-4 {
    --x: 80px;
    --y: -12px;
    --animation: ${circleAnimation[4]};
  }
  &.circle-5 {
    --x: 12px;
    --y: -4px;
    --animation: ${circleAnimation[5]};
  }
  &.circle-6 {
    --x: 56px;
    --y: 16px;
    --animation: ${circleAnimation[6]};
  }
  &.circle-7 {
    --x: 8px;
    --y: 28px;
    --animation: ${circleAnimation[7]};
  }
  &.circle-8 {
    --x: 28px;
    --y: -4px;
    --animation: ${circleAnimation[8]};
  }
  &.circle-9 {
    --x: 20px;
    --y: -12px;
    --animation: ${circleAnimation[9]};
  }
  &.circle-10 {
    --x: 64px;
    --y: 16px;
    --animation: ${circleAnimation[10]};
  }
  &.circle-11 {
    --x: 4px;
    --y: 4px;
    --animation: ${circleAnimation[11]};
  }
  &.circle-12 {
    --blur: 14px;
    --x: 52px;
    --y: 4px;
    --animation: ${circleAnimation[12]};
  }
`;
