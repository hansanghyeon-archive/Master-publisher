import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
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
} from './style';

type DittoProps = {
  excerpt: string;
  date: number;
  footer: () => JSX.Element;
  imgSrc?: string;
  title: string;
  isGrid: boolean;
};
const Ditto: React.FC<DittoProps> = ({
  imgSrc,
  excerpt,
  date,
  footer,
  title,
  isGrid,
}: DittoProps) => {
  const [animate, setAnimate] = useState({});
  const _excerpt = () => {
    if (excerpt.length < 118) return excerpt;
    return `${excerpt.substring(0, 110)}...`;
  };
  useEffect(() => {
    if (isGrid) {
      setAnimate({
        animate: {
          marginLeft: ['58px', 0],
          marginTop: [0, '54%'],
        },
        transition: {
          times: [0.05, 0.2],
        },
      });
    } else {
      setAnimate({
        animate: {
          marginLeft: [0, '58px'],
          marginTop: ['54%', 0],
        },
        transition: {
          duration: 0.25,
          times: [0, 0.25],
        },
      });
    }
  });
  return (
    <DittoRoot>
      <Main isGrid={isGrid} isThumnail={!!imgSrc}>
        <Thumnail imgSrc={imgSrc} isGrid={isGrid} isThumnail={!!imgSrc} />
        <MainInner {...animate} isGrid={isGrid} isThumnail={!!imgSrc}>
          <Body>
            <Title>{title}</Title>
            <Content isThumnail={!!imgSrc}>{_excerpt()}</Content>
          </Body>
          <Footer>
            <CategoryLabel>{footer()}</CategoryLabel>
            <Date>{dayjs(date).format('YYYY.M.D')}</Date>
          </Footer>
        </MainInner>
      </Main>
    </DittoRoot>
  );
};
Ditto.defaultProps = {
  imgSrc: '',
};

export default Ditto;
