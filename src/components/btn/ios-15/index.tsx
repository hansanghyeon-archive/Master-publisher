/* eslint-disable react/no-array-index-key */
import React from 'react';
// components
import { BtnRoot, Circle, Wrapper } from './style';

const Ios15Btn = () => {
  const hendleClick = () => {};
  const circleCount = 12;
  return (
    <BtnRoot type="button" onClick={hendleClick}>
      <Wrapper>
        <span>iOS 15</span>
        {[...Array(circleCount)].map((e, i) => (
          <Circle key={`circle-${i}`} className={`circle-${i + 1}`} />
        ))}
      </Wrapper>
    </BtnRoot>
  );
};

export default Ios15Btn;
