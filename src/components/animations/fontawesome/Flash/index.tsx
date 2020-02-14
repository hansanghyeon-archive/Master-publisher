import styled, { keyframes } from 'styled-components';

export const keyframesFlash = keyframes`
  0%,
  100%,
  50% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
`;

const Flash = styled.span`
  display: inline-block;
  animation: ${keyframesFlash} 2s ease infinite;
`;

export default Flash;
