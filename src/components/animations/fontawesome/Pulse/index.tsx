import styled, { keyframes } from 'styled-components';

const keyframesPulse = keyframes`
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  50% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Pulse = styled.span`
  display: inline-block;
  animation: ${keyframesPulse} 2s linear infinite;
`;

export default Pulse;
