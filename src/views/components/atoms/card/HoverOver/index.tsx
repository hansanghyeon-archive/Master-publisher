import React, { useRef, useState, useEffect } from 'react';
import ThemeProvider, { ThemeList } from '@style/themes';
import { CardRoot, CardBg, Card, CardWrap, CardInfo } from './index.style';

type State = {
  width: number;
  height: number;
  mouseX: number;
  mouseY: number;
  mouseLeaveDelay: any;
  cardStyleReset: boolean;
};
type props = {
  data: {
    title: string;
    content: string;
    imgSrc: string;
    interactionValue?: number;
  };
  theme?: keyof typeof ThemeList;
};
const HoverOverCard = ({ data, theme }: props) => {
  const { title, content, imgSrc, interactionValue } = data;
  const CardRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(0);
  const [cardStyleReset, setCardStyleReset] = useState(false);
  const useStates: State = {
    width,
    height,
    mouseX,
    mouseY,
    mouseLeaveDelay,
    cardStyleReset,
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { current }: any = CardRef;
    setMouseX(e.pageX - current.offsetLeft - useStates.width / 2);
    setMouseY(e.pageY - current.offsetTop - useStates.height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(useStates.mouseLeaveDelay);
    setCardStyleReset(false);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      window.setTimeout(() => {
        setCardStyleReset(true);
      }, 1000),
    );
  };

  const cardBgTransform = () => {
    const rX = (mouseX / width) * (interactionValue ?? 30);
    const rY = (mouseY / height) * -(interactionValue ?? 30);
    return { transform: `translateX(${rX}px) translateY(${rY}px)` };
  };
  const cardStyle = () => {
    const rX = (mouseX / width) * (interactionValue ?? 40);
    const rY = (mouseY / height) * -(interactionValue ?? 40);
    return { transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };
  };

  useEffect(() => {
    const CardEl: any = CardRef.current;
    setWidth(CardEl.offsetWidth);
    setHeight(CardEl.offsetHeight);
  }, [width, height, mouseX, mouseY, mouseLeaveDelay]);
  return (
    <ThemeProvider theme={theme}>
      <CardRoot>
        <CardWrap
          ref={CardRef}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Card style={cardStyle()} className={cardStyleReset ? 'reset' : ''}>
            <CardBg imgSrc={imgSrc} style={cardBgTransform()} />
            <CardInfo>
              <h1 className="header">{title}</h1>
              <p>{content}</p>
            </CardInfo>
          </Card>
        </CardWrap>
      </CardRoot>
    </ThemeProvider>
  );
};

export default HoverOverCard;
