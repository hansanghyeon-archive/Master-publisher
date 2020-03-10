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
    imgSrc: text(
      'Image src',
      'https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=',
    ),
    title: text('Title', 'Canyons'),
    content: text(
      'Contnet',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    ),
  };
  return <HoverOverCard {...props} />;
};
