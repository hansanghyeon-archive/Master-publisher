import styled, { keyframes } from 'styled-components';

export const keyframesTada = keyframes`
  0% {
    transform: scale(1);
  }
  10%,
  20% {
    transform: scale(0.9) rotate(-8deg);
  }
  30%,
  50%,

  70% {
    transform: scale(1.3) rotate(8deg);
  }
  40%,
  60% {
    transform: scale(1.3) rotate(-8deg);
  }
  100%,
  80% {
    transform: scale(1) rotate(0);
  }
`;

const Tada = styled.span`
  display: inline-block;
  animation: ${keyframesTada} 2s linear infinite;
`;

export default Tada;
