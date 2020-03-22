const REACT_TEMPLATE = `import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

interface StyledProps {
  imgSrc: string;
}
const ImgRow = styled.div<StyledProps>${'`'}
  padding-top: 54%;
  background-image: url(${'$'}{({ imgSrc }) => imgSrc});
  background-size: 100%;
  background-position: center;
  transition: background-size 0.8s ease-in-out;
  will-change: background-size;
  position: relative;
${'`'};
const ImgCentent = styled.div${'`'}
  position: absolute;
  padding: 0.5rem 1rem;
  top: 0;
  left: 0;
${'`'};
const Title = styled.div${'`'}
  margin-bottom: 8px;
  font-weight: bold;
${'`'};
const Content = styled.div${'`'}
  font-size: 0.875rem;
  color: #495057;
  height: 3.8rem;
  overflow: hidden;
  margin-bottom: 1rem;
${'`'};
const Date = styled.div${'`'}
  font-size: 0.75rem;
  color: ${'$'}{({ theme }) => theme.color.text[2]};
${'`'};
const ContentRow = styled.div${'`'}
  padding: 0.5rem 1rem;
  margin-bottom: 8px;
${'`'};
const FooterRow = styled.div${'`'}
  border-top: 1px solid #f8f9fa;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
${'`'};
const CardWrap = styled.div${'`'}
  font-size: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 22px 24px -28px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: transform box-shadow;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 22px 48px -28px rgba(0, 0, 0, 0.2);
    ${'$'}{ImgRow} {
      background-size: 104%;
    }
  }
${'`'};
const RootWrap = styled.div${'`'}
  padding: 1rem;
  max-width: 320px;
${'`'};

interface PostCardProps extends StyledProps {
  excerpt: string;
  date: number;
  footer: any;
}
const PostCard = ({ imgSrc, excerpt, date, footer }: PostCardProps) => {
  const _excerpt = () => {
    if (excerpt.length < 118) return excerpt;
    return ${'`'}${'$'}{excerpt.substring(0, 110)}...${'`'};
  };
  return (
    <RootWrap>
      <CardWrap>
        <ImgRow imgSrc={imgSrc}>
          <ImgCentent />
        </ImgRow>
        <ContentRow>
          <Title>Title</Title>
          <Content>{_excerpt()}</Content>
          <Date>{moment(date).format('YYYY년 M월 D일')}</Date>
        </ContentRow>
        <FooterRow>{footer()}</FooterRow>
      </CardWrap>
    </RootWrap>
  );
};

export default PostCard;
`;

export default REACT_TEMPLATE;
