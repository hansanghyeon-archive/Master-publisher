import React from 'react';
// Context
import CenterWrap from '@atom/wrap/Center';
// Components
import NotionStyle from '.';

export default {
  title: 'atoms/List/NotionStyle',
  component: NotionStyle,
};
export const standard = () => (
  <NotionStyle imgSrc="https://wp.hapas.io/wp-content/uploads/React.png">
    React
  </NotionStyle>
);
standard.story = {
  decorators: [(storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>],
};
