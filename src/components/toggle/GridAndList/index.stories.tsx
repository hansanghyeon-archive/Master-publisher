import React from 'react';
// Components
import CenterWrap from '@/wrap/Center';
import GridAndListToggle from '.';

export default {
  title: 'components/Toggle/Grid and List',
  component: GridAndListToggle,
  decorators: [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>],
};

export const standard = () => <GridAndListToggle />;
