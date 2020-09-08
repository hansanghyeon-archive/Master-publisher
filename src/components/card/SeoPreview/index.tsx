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
} from './style';

type LoadedType = {
  data: resData;
};
interface resData {
  title: string;
  description: string;
  image: string;
  favicon: string;
  url: string;
}

const Loaded = ({ data }: LoadedType) => {
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

interface props {
  data: {
    resData: resData;
    loading: boolean;
    reqUrl: string;
  };
}

const SeoPreviewCard = ({ data }: props) => {
  const { loading, reqUrl, resData } = data;
  return (
    <SeoPreview href={reqUrl}>
      {!loading ? <Loaded data={resData} /> : <Loading />}
    </SeoPreview>
  );
};
export default SeoPreviewCard;
