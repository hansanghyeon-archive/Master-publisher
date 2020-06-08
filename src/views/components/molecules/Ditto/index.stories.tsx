import React from 'react';
import { withKnobs, text, date, boolean } from '@storybook/addon-knobs';
// import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
import Ditto from '.';

export default {
  title: '02. molecules/Ditto',
  component: Ditto,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const imgSrc = text(
    'Image Src',
    'https://wp.hapas.io/wp-content/uploads/4log/unnamed-file.gif/ditto-02.gif',
  );
  const excerpt = text(
    'excerpt',
    'One of the Pokémon in Pokemon. It looks like a purple slime and has the ability to transform into another Pokemon.',
  );
  const _date = date('Date', new Date());
  const footer = {
    icon: text(
      'Category Icon',
      'https://wp.hapas.io/wp-content/uploads/4log/pokemon/038-gaming.svg',
    ),
    title: text('Category title', 'Pokemon'),
  };
  const title = text('Title', 'Ditto component');
  const isGrid = boolean('isGrid', false);
  const props = {
    data: { imgSrc, excerpt, date: _date, footer, title, isGrid },
  };
  const props2 = {
    data: { imgSrc: undefined, excerpt, date: _date, footer, title, isGrid },
  };
  return (
    <>
      <Ditto {...props} />
      <Ditto {...props2} />
    </>
  );
};
