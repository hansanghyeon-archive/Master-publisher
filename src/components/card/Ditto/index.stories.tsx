import React from 'react';
import { withKnobs, text, date, boolean } from '@storybook/addon-knobs';
// components
import CenterWrap from '@/wrap/Center';
import NotionStyleListItem from '@/listItem/NotionStyle';
import * as Bit from '@bit/hansanghyeon.card.ditto';
import Ditto from '.';

export default {
  title: 'components/Card/Ditto',
  component: Ditto,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const imgSrc = text(
    'Image Src',
    'https://wp.hapas.io/wp-content/uploads/4log/gif/ditto-02.gif',
  );
  const excerpt = text(
    'excerpt',
    'One of the Pokémon in Pokemon. It looks like a purple slime and has the ability to transform into another Pokemon.',
  );
  const _date = date('Date', new Date());
  const footer = () => (
    <NotionStyleListItem
      imgSrc={text(
        'Category Icon',
        'https://wp.hapas.io/wp-content/uploads/4log/icons/pokemon/flat2/038-gaming.svg',
      )}
    >
      {text('Category title', 'Pokemon')}
    </NotionStyleListItem>
  );
  const title = () => <div>{text('Title', 'Ditto component')}</div>;
  const isGrid = boolean('isGrid', true);
  const props = {
    imgSrc,
    excerpt,
    date: _date,
    footer,
    title,
    isGrid,
  };
  const props2 = {
    imgSrc: undefined,
    excerpt,
    date: _date,
    footer,
    title,
    isGrid,
  };
  return (
    <div>
      <Ditto {...props} />
      <Ditto {...props2} />
    </div>
  );
};

export const bit = () => {
  const BitDitto = Bit.default;
  const imgSrc = text(
    'Image Src',
    'https://wp.hapas.io/wp-content/uploads/4log/gif/ditto-02.gif',
  );
  const excerpt = text(
    'excerpt',
    'One of the Pokémon in Pokemon. It looks like a purple slime and has the ability to transform into another Pokemon.',
  );
  const _date = date('Date', new Date());
  const footer = () => (
    <NotionStyleListItem
      imgSrc={text(
        'Category Icon',
        'https://wp.hapas.io/wp-content/uploads/4log/icons/pokemon/flat2/038-gaming.svg',
      )}
    >
      {text('Category title', 'Pokemon')}
    </NotionStyleListItem>
  );
  const title = () => <div>{text('Title', 'Ditto component')}</div>;
  const isGrid = boolean('isGrid', false);
  const props = {
    imgSrc,
    excerpt,
    date: _date,
    footer,
    title,
    isGrid,
  };
  return <BitDitto {...props} />;
};
