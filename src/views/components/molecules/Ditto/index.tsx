import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import { TimelineLite, Power1 } from 'gsap';
import ThemeProvider, { ThemeList } from '@style/themes';
import NotionStyleListItem from '@atom/listItem/NotionStyle';
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
  data: {
    excerpt: string;
    date: number;
    footer: {
      icon: string;
      title: string;
    };
    imgSrc?: string;
    title: string;
    isGrid: boolean;
  };
  theme?: keyof typeof ThemeList;
}
const Ditto = ({ data, theme }: DittoProps) => {
  const { imgSrc, excerpt, date, footer, title, isGrid } = data;
  const MainInnerRef = useRef<HTMLDivElement>(null);
  const _excerpt = () => {
    if (excerpt.length < 118) return excerpt;
    return `${excerpt.substring(0, 110)}...`;
  };
  useEffect(() => {
    const tl = new TimelineLite();
    if (isGrid) {
      tl.to(MainInnerRef.current, 0.05, {
        marginLeft: '0',
      }).to(MainInnerRef.current, 0.2, {
        marginTop: '54%',
        ease: Power1.easeOut,
      });
    } else {
      tl.to(MainInnerRef.current, 0.25, {
        style: null,
      });
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <DittoRoot>
        <Main isGrid={isGrid} isThumnail={!!imgSrc}>
          <Thumnail imgSrc={imgSrc} isGrid={isGrid} isThumnail={!!imgSrc} />
          <MainInner ref={MainInnerRef} isGrid={isGrid} isThumnail={!!imgSrc}>
            <Body>
              <Title>{title}</Title>
              <Content isThumnail={!!imgSrc}>{_excerpt()}</Content>
            </Body>
            <Footer>
              <CategoryLabel>
                <NotionStyleListItem imgSrc={footer.icon}>
                  {footer.title}
                </NotionStyleListItem>
              </CategoryLabel>
              <Date>{moment(date).format('YYYY.M.D')}</Date>
            </Footer>
          </MainInner>
        </Main>
      </DittoRoot>
    </ThemeProvider>
  );
};

export default Ditto;
