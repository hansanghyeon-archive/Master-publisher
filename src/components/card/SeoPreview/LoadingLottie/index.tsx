import React from 'react';
import Lottie from 'react-lottie';
import CpuChip from './cpu-chip.json';
// styled-components
import { LottieWrap } from './style';

const lottieOptions = {
  animationData: CpuChip,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'cpu-chip',
  },
};

const LoadingLottie = () => (
  <LottieWrap>
    <Lottie options={lottieOptions} />
  </LottieWrap>
);

export default LoadingLottie;
