import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { transparentize } from 'polished';

interface StyledProps {
  imgSrc: string;
}
const RootWrap = styled.div`
  padding: 1rem;
  min-height: 48px;
  position: relative;
`;
const ImgCol = styled.div<StyledProps>`
  width: 80px;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) =>
    transparentize(0.75, theme.color.grayscales.dark[4])};
  background-blend-mode: overlay;
  margin-right: -1rem;
  position: relative;
  z-index: 100;
  transition: all 0.45s ease-in-out;
  will-change: width, background-color, margin-right;
  border-radius: 8px;
`;
const CardInnerWrap = styled.div`
  position: relative;
  z-index: 200;
  background-color: ${({ theme }) => theme.color.bg[0]};
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
`;
const CardWrap = styled.div`
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 22px 24px -28px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.45s ease-in-out;
  will-change: box-shadow;
  display: flex;
  position: relative;
  &:hover {
    box-shadow: none;
    ${ImgCol} {
      width: 120px;
      background-color: transparent;
      margin-right: 0;
      z-index: 200;
      box-shadow: 2px 0 22px -8px rgba(0, 0, 0, 0.4);
    }
    ${CardInnerWrap} {
      padding-left: 1rem;
      margin-left: -1rem;
      z-index: 100;
      transform: scale(0.96);
      box-shadow: 0 22px 24px -28px rgba(0, 0, 0, 0.2);
    }
  }
`;
const CardBody = styled.div`
  padding: 0.5rem 1rem;
`;
const Title = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
`;
const Content = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.text[1]};
  max-width: 280px;
  height: 3.8rem;
  overflow: hidden;
`;
const Date = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.text[2]};
`;
const CardFooter = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  justify-content: space-between;
  align-items: center;
  > div {
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
const CategoryLabel = styled.div`
  border-radius: 8px;
  padding: 0.25rem 8px;
  background-color: ${({ theme }) => theme.color.bg[1]};
  cursor: pointer;
`;

interface PostListItemProps {
  excerpt: string;
  date: number;
  footer: any;
  imgSrc: string;
}
const PostListItem = ({ imgSrc, excerpt, date, footer }: PostListItemProps) => {
  const _excerpt = () => {
    if (excerpt.length < 118) return excerpt;
    return `${excerpt.substring(0, 110)}...`;
  };
  return (
    <RootWrap>
      <CardWrap>
        <ImgCol imgSrc={imgSrc} />
        <CardInnerWrap>
          <CardBody>
            <Title>Title</Title>
            <Content>{_excerpt()}</Content>
          </CardBody>
          <CardFooter>
            <CategoryLabel>{footer()}</CategoryLabel>
            <Date>{moment(date).format('YYYY년 M월 D일')}</Date>
          </CardFooter>
        </CardInnerWrap>
      </CardWrap>
    </RootWrap>
  );
};

export default PostListItem;
