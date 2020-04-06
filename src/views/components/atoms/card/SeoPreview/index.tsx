import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
import './index.style.scss';
import LoadingIcon from './LoadingIcon';
import LoadingLottie from './LoadingLottie';

const Header = styled.div`
  background-color: ${({ theme }) => theme.color.bg[0]};
`;
const Favicon = styled.div``;
const Body = styled(Row)`
  background-color: ${({ theme }) => theme.color.bg[1]};
  color: ${({ theme }) => theme.color.text[2]};
`;
const Url = styled.div``;
const ImageCol = styled(Col)<styleProps>`
  background-image: ${({ bg }) => `url(${bg})`};
`;
const Content = styled(Col)``;
const RootWrap = styled.a`
  ${Row} {
    margin-left: 0;
    margin-right: 0;
  }
  &:hover {
    ${Header} {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.grayscales.light[0]};
    }
    ${Body} {
      color: ${({ theme }) => theme.color.text[1]};
      border: 1px solid ${({ theme }) => theme.color.text[2]};
    }
  }
`;
const LottieWrap = styled(Col)`
  svg.cpu-chip path[stroke='rgb(0,0,0)'] {
    stroke: ${({ theme }) => theme.color.text[1]};
  }
  svg.cpu-chip path[stroke='rgb(241,241,241)'] {
    stroke: ${({ theme }) => theme.color.bg[1]};
  }
  svg.cpu-chip path[fill='rgb(0,0,0)'] {
    fill: ${({ theme }) => theme.color.text[1]};
  }
  svg.cpu-chip path[fill='rgb(241,241,241)'] {
    fill: ${({ theme }) => theme.color.bg[1]};
  }
`;

const SeoPreviewCard = ({ data, loading }: props) => {
  const { title, description, url, favicon, image } = data;
  const decodeUrl = decodeURI(url);
  const Loaded = () => (
    <>
      <Header className="_header">
        <Favicon className="_favicon">
          <img src={favicon} alt="" />
        </Favicon>
        <div>{title}</div>
      </Header>
      <Body className="_body">
        <Content col className="_content">
          <div className="_description">{description}</div>
          <Url className="_url">{decodeUrl}</Url>
        </Content>
        {image && <ImageCol col={12} sm={4} bg={image} className="_thumnail" />}
      </Body>
    </>
  );
  const Loading = () => (
    <>
      <Header className="_header">
        <Favicon className="_favicon">
          <LoadingIcon />
        </Favicon>
        <div>Loading...</div>
      </Header>
      <Body className="_body">
        <LottieWrap col className="_content">
          <LoadingLottie />
        </LottieWrap>
      </Body>
    </>
  );
  return (
    <RootWrap href={decodeUrl} className={`seoPreview ${loading && 'loading'}`}>
      {!loading ? <Loaded /> : <Loading />}
    </RootWrap>
  );
};

export default SeoPreviewCard;
interface styleProps {
  bg?: string;
}
interface props {
  data?: {
    title: string;
    description: string;
    url: string;
    image: string;
    favicon: string;
  };
  loading: boolean;
}
