import React from 'react';

import CenterWrap from '@/wrap/Center';
import DayNightBtn from '.';

export default {
  title: 'components/Toggle/DayNightBtn',
  component: DayNightBtn,
};
export const standard = () => <DayNightBtn />;
standard.decorators = [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>];
