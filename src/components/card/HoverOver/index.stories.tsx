import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import styled from 'styled-components';
// Components
import CenterWrap from '@/wrap/Center';
import HoverOverCard from '.';

const FlexBox = styled.div`
  display: flex;
`;

export default {
  title: 'components/Card/HoverOver',
  component: HoverOverCard,
  decorators: [
    withKnobs,
    (storyFn: any) => (
      <CenterWrap>
        <FlexBox>{storyFn()}</FlexBox>
      </CenterWrap>
    ),
  ],
};

const KnobsGroup = ({
  imgSrc,
  title,
  content,
  groupName,
  interactionValue,
}: any) => {
  return {
    data: {
      imgSrc: text('Image src', imgSrc, groupName),
      title: text('Title', title, groupName),
      content: text('Contnet', content, groupName),
      interactionValue: number('interactionValue', interactionValue, groupName),
    },
  };
};

const mockData = [
  {
    imgSrc: 'https://source.unsplash.com/collection/9641990',
    title: 'components/봄',
    content: '[unsplash] 봄 collections',
    interactionValue: 15,
    groupName: 'Card1',
  },
  {
    imgSrc: 'https://source.unsplash.com/collection/9683070',
    title: 'components/여름',
    content: '[unsplash] 여름 collections',
    interactionValue: 15,
    groupName: 'Card2',
  },
  {
    imgSrc: 'https://source.unsplash.com/collection/9683123',
    title: 'components/가을',
    content: '[unsplash] 가을 collections',
    interactionValue: 15,
    groupName: 'Card3',
  },
  {
    imgSrc: 'https://source.unsplash.com/collection/9683129',
    title: 'components/겨울',
    content: '[unsplash] 겨울 collections',
    interactionValue: 15,
    groupName: 'Card4',
  },
];

export const standard = () => {
  return mockData.map((data) => {
    const props = KnobsGroup(data);
    return <HoverOverCard {...props.data} />;
  });
};
