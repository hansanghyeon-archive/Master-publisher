import React from 'react';
// Components
import CenterWrap from '@atom/wrap/Center';
import GridAndListToggle from '.';

export default {
  title: '01. atoms/Toggle/Grid and List',
  component: GridAndListToggle,
  decorators: [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>],
};

export const standard = () => <GridAndListToggle />;
