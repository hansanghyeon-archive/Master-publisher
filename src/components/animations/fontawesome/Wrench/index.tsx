import styled, { keyframes } from 'styled-components';

export const keyframesWrench = keyframes`
  0% {
    transform: rotate(-12deg);
  }
  8% {
    transform: rotate(12deg);
  }
  10% {
    transform: rotate(24deg);
  }
  18% {
    transform: rotate(-24deg);
  }
  20% {
    transform: rotate(-24deg);
  }
  28% {
    transform: rotate(24deg);
  }
  30% {
    transform: rotate(24deg);
  }
  38% {
    transform: rotate(-24deg);
  }
  40% {
    transform: rotate(-24deg);
  }
  48% {
    transform: rotate(24deg);
  }
  50% {
    transform: rotate(24deg);
  }
  58% {
    transform: rotate(-24deg);
  }
  60% {
    transform: rotate(-24deg);
  }
  68% {
    transform: rotate(24deg);
  }
  100%,
  75% {
    transform: rotate(0);
  }
`;

const Wrench = styled.span`
  display: inline-block;
  animation: ${keyframesWrench} 2s ease infinite;
`;

export default Wrench;
