import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import CenterWrap from '@atom/wrap/Center';
import HoverOverCard from '.';

export default {
  title: '01. atoms/Card/HoverOver',
  component: HoverOverCard,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const props = {
    imgSrc: text('Image src', 'https://source.unsplash.com/collection/9641990'),
    title: text('Title', 'Canyons'),
    content: text(
      'Contnet',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    ),
  };
  return <HoverOverCard {...props} />;
};
