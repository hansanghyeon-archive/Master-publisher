import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withPreview } from 'storybook-addon-preview';
// Context
import CenterWrap from '@atom/wrap/Center';
// Components
import NotionStyleListItem from '.';

export default {
  title: '01. atoms/List Item/NotionStyle',
  component: NotionStyleListItem,
  decorators: [
    withKnobs,
    withPreview,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};
export const standard = () => {
  const imgSrc = text(
    'Image src',
    'https://wp.hapas.io/wp-content/uploads/4log/icons/React.png',
  );
  const Text = text('Text', 'React');
  return <NotionStyleListItem imgSrc={imgSrc}>{Text}</NotionStyleListItem>;
};
