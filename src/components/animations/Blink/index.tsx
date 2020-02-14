import styled, { keyframes } from 'styled-components';

export const keyframesBlink = keyframes`
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
`;

const Blink = styled.span`
  display: inline-block;
  animation: ${keyframesBlink} 2s infinite both;
`;

export default Blink;
