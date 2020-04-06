import React from 'react';
import Lottie from 'react-lottie';
import CpuChip from '@view/animations/cpu-chip.json';

const lottieOptions = {
  animationData: CpuChip,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'cpu-chip',
  },
};

const LoadingLottie = () => <Lottie options={lottieOptions} />;

export default LoadingLottie;
