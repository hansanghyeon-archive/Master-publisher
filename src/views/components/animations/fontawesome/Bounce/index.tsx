import styled, { keyframes } from 'styled-components';

export const keyframesBounce = keyframes`
  0%,
  10%,
  100%,
  20%,
  50%,
  80% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Bounce = styled.span`
  display: inline-block;
  animation: ${keyframesBounce} 2s ease infinite;
`;

export default Bounce;
