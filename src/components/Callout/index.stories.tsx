import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withPreview } from 'storybook-addon-preview';

import CenterWrap from '@/wrap/Center';
import Callout from '.';
import previews from './previews/index';

export default {
  title: 'Callout',
  component: Callout,
  decorators: [
    withKnobs,
    withPreview,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

const mockData = {
  text: `Culpa ullamco sit officia sunt duis et minim sit laboris cupidatat sunt officia eiusmod eiusmod. Sint voluptate nisi adipisicing culpa incididunt magna. Laboris exercitation consequat labore dolore proident laborum duis eiusmod eiusmod dolore in. Eiusmod velit laborum labore laborum officia sint amet ex reprehenderit anim id deserunt reprehenderit incididunt. Excepteur irure fugiat ex proident exercitation veniam incididunt in incididunt ut anim. Laboris laboris nisi sint magna.`,
};

export const standard = () => {
  const icon = text('Icon', '👍');
  const children = text('Content', mockData.text);

  return <Callout icon={icon}>{children}</Callout>;
};
standard.parameters = {
  preview: previews,
};
