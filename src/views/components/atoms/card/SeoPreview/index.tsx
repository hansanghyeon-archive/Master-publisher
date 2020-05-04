import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Col } from 'styled-bootstrap-grid';

import DefaultTheme, { DarkTheme, styleTheme } from '@style/themes/4log';
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

export enum ThemeList {
  light = 'light',
  dark = 'dark',
}
interface props {
  data: {
    resData: resData;
    loading: boolean;
    reqUrl: string;
  };
  theme?: keyof typeof ThemeList;
}

const SeoPreviewCard = ({ data, theme }: props) => {
  const { loading, reqUrl, resData } = data;
  const choiceTheme = (): styleTheme => {
    if (!theme) return DefaultTheme;
    switch (ThemeList[theme]) {
      case ThemeList.light:
        return DefaultTheme;
      case ThemeList.dark:
        return DarkTheme;
      default:
        return DefaultTheme;
    }
  };
  return (
    <ThemeProvider theme={choiceTheme}>
      <SeoPreview href={reqUrl}>
        {!loading ? <Loaded data={resData} /> : <Loading />}
      </SeoPreview>
    </ThemeProvider>
  );
};
export default SeoPreviewCard;
