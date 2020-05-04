import React from 'react';
import { Col } from 'styled-bootstrap-grid';
import LoadingIcon from './LoadingIcon';
import LoadingLottie from './LoadingLottie';
import SeoPreview, {
  Header,
  LoadingHeader,
  Favicon,
  Body,
  Url,
  Thumnail,
  Content,
  Title,
  Description,
} from './index.style';

const Loaded = ({ data }: reqData) => {
  const { title, description, url, favicon, image } = data;
  const decodeUrl = decodeURI(url);
  return (
    <>
      <Header>
        <Favicon>
          <img src={favicon} alt="" />
        </Favicon>
        <Title>{title}</Title>
      </Header>
      <Body>
        <Content col>
          <Description>{description}</Description>
          <Url>{decodeUrl}</Url>
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
    <LoadingHeader>
      <Favicon>
        <LoadingIcon />
      </Favicon>
      <div>Loading...</div>
    </LoadingHeader>
    <Body>
      <Content col>
        <LoadingLottie />
      </Content>
    </Body>
  </>
);

const SeoPreviewCard = ({ data, loading, reqUrl }: props) => {
  return (
    <SeoPreview href={reqUrl}>
      {!loading ? <Loaded data={data} /> : <Loading />}
    </SeoPreview>
  );
};

export default SeoPreviewCard;
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
