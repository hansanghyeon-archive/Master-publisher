import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import * as Bit from '@bit/hansanghyeon.list-item.notion-style';
// Context
import CenterWrap from '@/wrap/Center';
// Components
import NotionStyleListItem from '.';
import InboxList from './list';

const mockData = {
  data: {
    category: {
      posts: {
        edges: [
          {
            node: {
              id: 'cG9zdDo0OA==',
              title: 'components/해당컴포넌트 outside 영역 클릭 이벤트',
              slug:
                '%ed%95%b4%eb%8b%b9%ec%bb%b4%ed%8f%ac%eb%84%8c%ed%8a%b8-outside-%ec%98%81%ec%97%ad-%ed%81%b4%eb%a6%ad-%ec%9d%b4%eb%b2%a4%ed%8a%b8',
              date: '2020-03-15T19:23:01',
            },
          },
          {
            node: {
              id: 'cG9zdDo0Mw==',
              title: 'components/Mouse Position Component',
              slug: 'mouse-position-component',
              date: '2020-03-15T18:39:43',
            },
          },
          {
            node: {
              id: 'cG9zdDo0OA==',
              title: 'components/해당컴포넌트 outside 영역 클릭 이벤트',
              slug:
                '%ed%95%b4%eb%8b%b9%ec%bb%b4%ed%8f%ac%eb%84%8c%ed%8a%b8-outside-%ec%98%81%ec%97%ad-%ed%81%b4%eb%a6%ad-%ec%9d%b4%eb%b2%a4%ed%8a%b8',
              date: '2020-03-15T19:23:01',
            },
          },
          {
            node: {
              id: 'cG9zdDo0Mw==',
              title: 'components/Mouse Position Component',
              slug: 'mouse-position-component',
              date: '2020-03-15T18:39:43',
            },
          },
        ],
      },
    },
  },
};

export default {
  title: 'components/List Item/NotionStyle',
  component: NotionStyleListItem,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};
export const standard = () => {
  const imgSrc = text(
    'Image src',
    `${process.env.FILE_SERVER}/4log/icons/react.png`,
  );
  const Text = text('Text', 'React');
  return <NotionStyleListItem imgSrc={imgSrc}>{Text}</NotionStyleListItem>;
};

export const bit = () => {
  const NotionStyle = Bit.default;
  const imgSrc = text(
    'Image src',
    `${process.env.FILE_SERVER}/4log/icons/react.png`,
  );
  const Text = text('Text', 'React');
  return <NotionStyle imgSrc={imgSrc}>{Text}</NotionStyle>;
};

export const list = () => {
  const data = object('data', mockData.data);
  return <InboxList data={data} />;
};
