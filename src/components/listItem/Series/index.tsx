import React, { useState } from 'react';
import {
  FaCaretDown,
  FaCaretUp,
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';
import {
  Img,
  Wrap,
  Header,
  Title,
  Footer,
  Controller,
  Body,
  Ol,
  Li,
  MoreBtn,
  ArrowBtn,
} from './style';

const SeriesList = ({ data }: any) => {
  const [toggle, setToggle] = useState(true);
  const _handleClick = () => {
    setToggle(!toggle);
  };
  const { query } = data;
  return (
    <Wrap>
      <Header toggle={toggle}>
        <Title>{query.series.name}</Title>
        <Img
          src="https://wp.hapas.io/wp-content/uploads/4log/icons/book.svg"
          alt="Series"
        />
      </Header>
      <Body toggle={toggle}>
        <Ol>
          {query.series.posts.edges.map(({ node }: any) => (
            <Li>{node.title}</Li>
          ))}
        </Ol>
      </Body>
      <Footer>
        <MoreBtn type="button" onClick={_handleClick}>
          {toggle ? <FaCaretDown /> : <FaCaretUp />}
          <span>{toggle ? '목록보기' : '접기'}</span>
        </MoreBtn>
        <Controller>
          <ArrowBtn type="button">
            <FaChevronLeft />
          </ArrowBtn>
          <ArrowBtn type="button">
            <FaChevronRight />
          </ArrowBtn>
        </Controller>
      </Footer>
    </Wrap>
  );
};

export default SeriesList;
