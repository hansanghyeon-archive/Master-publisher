import React from 'react';
import { withKnobs, text, date, boolean } from '@storybook/addon-knobs';
// import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
import NotionStyleListItem from '@atom/listItem/NotionStyle';
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
    'https://wp.hapas.io/wp-content/uploads/unnamed-file.gif/ditto-02.gif',
  );
  const excerpt = text(
    'excerpt',
    'One of the Pokémon in Pokemon. It looks like a purple slime and has the ability to transform into another Pokemon.',
  );
  const _date = date('Date', new Date());
  const footer = () => {
    const icon = text(
      'Category Icon',
      'https://wp.hapas.io/wp-content/uploads/pokemon/038-gaming.svg',
    );
    return <NotionStyleListItem imgSrc={icon}>Pokemon</NotionStyleListItem>;
  };
  const title = text('Title', 'Ditto component');
  const isGrid = boolean('isGrid', false);
  const props = { imgSrc, excerpt, date: _date, footer, title, isGrid };
  return (
    <>
      <Ditto {...props} />
      <Ditto {...props} imgSrc={undefined} />
    </>
  );
};
