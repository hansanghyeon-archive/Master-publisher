import React from 'react';

import CenterWrap from '@atom/wrap/Center';
import DayNightBtn from '.';

export default {
  title: '01. atoms/Toggle/DayNightBtn',
  component: DayNightBtn,
};
export const standard = () => <DayNightBtn />;
standard.story = {
  decorators: [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>],
};
