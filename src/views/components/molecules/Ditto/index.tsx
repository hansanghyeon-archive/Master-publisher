import React, { useEffect } from 'react';
import moment from 'moment';
import { TimelineLite, Power1 } from 'gsap';
import {
  DittoRoot,
  Main,
  Body,
  Title,
  Footer,
  Thumnail,
  MainInner,
  Content,
  Date,
  CategoryLabel,
} from './index.style';

interface DittoProps {
  excerpt: string;
  date: number;
  footer: () => React.ReactNode;
  imgSrc?: string;
  title: string;
  isGrid: boolean;
}
const Ditto = ({
  imgSrc,
  excerpt,
  date,
  footer,
  title,
  isGrid,
}: DittoProps) => {
  const _excerpt = () => {
    if (excerpt.length < 118) return excerpt;
    return `${excerpt.substring(0, 110)}...`;
  };
  useEffect(() => {
    const tl = new TimelineLite();
    if (isGrid) {
      tl.to(['._mainInner'], 0.05, {
        marginLeft: '0',
      }).to(['._mainInner'], 0.2, {
        marginTop: '54%',
        ease: Power1.easeOut,
      });
    } else {
      tl.to(['._mainInner'], 0.25, {
        style: null,
      });
    }
  });
  return (
    <DittoRoot>
      <Main isGrid={isGrid} isThumnail={!!imgSrc}>
        <Thumnail imgSrc={imgSrc} isGrid={isGrid} isThumnail={!!imgSrc} />
        <MainInner isGrid={isGrid} isThumnail={!!imgSrc}>
          <Body>
            <Title>{title}</Title>
            <Content isThumnail={!!imgSrc}>{_excerpt()}</Content>
          </Body>
          <Footer>
            <CategoryLabel>{footer()}</CategoryLabel>
            <Date>{moment(date).format('YYYY.M.D')}</Date>
          </Footer>
        </MainInner>
      </Main>
    </DittoRoot>
  );
};

export default Ditto;
