import React from 'react';
// Context
import CenterWrap from '@atom/wrap/Center';
// Components
import NotionStyleList from '.';

export default {
  title: '01. atoms/List/NotionStyle',
  component: NotionStyleList,
};
export const standard = () => (
  <NotionStyleList imgSrc="https://wp.hapas.io/wp-content/uploads/React.png">
    React
  </NotionStyleList>
);
standard.story = {
  decorators: [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>],
};
