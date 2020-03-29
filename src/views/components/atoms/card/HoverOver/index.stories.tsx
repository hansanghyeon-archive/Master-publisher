import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withPreview } from 'storybook-addon-preview';
import styled from 'styled-components';

import CenterWrap from '@atom/wrap/Center';
import HoverOverCard, { Props } from '.';
import previews from './previews/index';

const FlexBox = styled.div`
  display: flex;
`;

export default {
  title: '01. atoms/Card/HoverOver',
  component: HoverOverCard,
  decorators: [
    withKnobs,
    withPreview,
    (storyFn: any) => (
      <CenterWrap>
        <FlexBox>{storyFn()}</FlexBox>
      </CenterWrap>
    ),
  ],
};

interface KProps extends Props {
  groupName?: string;
}
const KnobsGroup = ({ imgSrc, title, content, groupName }: KProps) => {
  return {
    imgSrc: text('Image src', imgSrc, groupName),
    title: text('Title', title, groupName),
    content: text('Contnet', content, groupName),
  };
};

const mockData = [
  {
    imgSrc: 'https://source.unsplash.com/collection/9641990',
    title: '봄',
    content: '[unsplash] 봄 collections',
    groupName: 'Card1',
  },
  {
    imgSrc: 'https://source.unsplash.com/collection/9683070',
    title: '여름',
    content: '[unsplash] 여름 collections',
    groupName: 'Card2',
  },
  {
    imgSrc: 'https://source.unsplash.com/collection/9683123',
    title: '가을',
    content: '[unsplash] 가을 collections',
    groupName: 'Card3',
  },
  {
    imgSrc: 'https://source.unsplash.com/collection/9683129',
    title: '겨울',
    content: '[unsplash] 겨울 collections',
    groupName: 'Card4',
  },
];

export const standard = () => {
  return mockData.map((data) => {
    const props = KnobsGroup(data);
    return <HoverOverCard {...props} />;
  });
};

standard.story = {
  parameters: {
    preview: previews,
  },
};
