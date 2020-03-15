import React from 'react';
import styled from 'styled-components';
import NotionStyleList from '@atom/listItem/NotionStyle';
import Link from '@atom/Link';

const Wrap = styled.div``;
const TitleWrap = styled.div`
  font-size: 18px;
  padding: 8px 0;
`;

const InboxList = ({ data }: any) => {
  const { posts } = data.category;
  return (
    <Wrap>
      <TitleWrap>
        <span>🗃</span>
        INBOX
      </TitleWrap>
      {posts.edges.map(({ node }: any) => {
        return (
          <Link>
            <NotionStyleList key={node.id}>{node.title}</NotionStyleList>
          </Link>
        );
      })}
    </Wrap>
  );
};

export default InboxList;
