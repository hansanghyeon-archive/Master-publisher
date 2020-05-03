import React from 'react';
import { Col } from 'styled-bootstrap-grid';
import LoadingIcon from './LoadingIcon';
import LoadingLottie from './LoadingLottie';
import SeoPreview, {
  Header,
  Favicon,
  Body,
  Url,
  Thumnail,
  Content,
} from './index.style';

const Loaded = ({ data }: reqData) => {
  const { title, description, url, favicon, image } = data;
  const decodeUrl = decodeURI(url);
  return (
    <>
      <Header className="_header">
        <Favicon className="_favicon">
          <img src={favicon} alt="" />
        </Favicon>
        <div className="_title">{title}</div>
      </Header>
      <Body className="_body">
        <Content col className="_content">
          <div className="_description">{description}</div>
          <Url className="_url">{decodeUrl}</Url>
        </Content>
        {image && (
          <Col col={12} sm={4}>
            <Thumnail bg={image} />
          </Col>
        )}
      </Body>
    </>
  );
};
const Loading = () => (
  <>
    <Header className="_header">
      <Favicon className="_favicon">
        <LoadingIcon />
      </Favicon>
      <div>Loading...</div>
    </Header>
    <Body className="_body">
      <Content col className="_content">
        <LoadingLottie />
      </Content>
    </Body>
  </>
);

const SeoPreviewCard = ({ data, loading, reqUrl }: props) => {
  return (
    <SeoPreview href={reqUrl} className={`seoPreview ${loading && 'loading'}`}>
      {!loading ? <Loaded data={data} /> : <Loading />}
    </SeoPreview>
  );
};

export default SeoPreviewCard;
interface styleProps {
  bg?: string;
}
interface reqData {
  data: {
    title: string;
    description: string;
    image: string;
    favicon: string;
    url: string;
  };
}
interface props extends reqData {
  loading: boolean;
  reqUrl: string;
}
