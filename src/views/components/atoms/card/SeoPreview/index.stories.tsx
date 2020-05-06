import React from 'react';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';
// import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
// import SeoPreviewCard from '@bit/m5p8.card.seo-preview';
import { ThemeList } from '@style/themes';
import SeoPreviewCard from '.';

export default {
  title: '01. atoms/Card/SeoPreview',
  component: SeoPreviewCard,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const resData = object('Data', {
    site_name: 'Medium',
    type: 'article',
    title: 'Puppeteer 간단 정리하기',
    description:
      'Puppeteer 는 Headless Chrome 혹은 Chromium 를 제어하도록 도와주는 라이브러리 이다.',
    url:
      'https://medium.com/@pks2974/puppeteer-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-a252bffbb2a8',
    image:
      'https://fs.nas.hapas.io/meta-crawler/https%253A%252F%252Fmedium.com%252F@pks2974%252Fpuppeteer-%25EA%25B0%2584%25EB%258B%25A8-%25EC%25A0%2595%25EB%25A6%25AC%25ED%2595%2598%25EA%25B8%25B0-a252bffbb2a8/image.png',
    favicon:
      'https://fs.nas.hapas.io/meta-crawler/https%253A%252F%252Fmedium.com%252F@pks2974%252Fpuppeteer-%25EA%25B0%2584%25EB%258B%25A8-%25EC%25A0%2595%25EB%25A6%25AC%25ED%2595%2598%25EA%25B8%25B0-a252bffbb2a8/favicon.ico',
  });
  const props = {
    data: {
      resData: resData,
      loading: boolean('isLoading', false),
      reqUrl:
        'https://medium.com/@pks2974/puppeteer-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-a252bffbb2a8',
    },
    theme: ThemeList.dark,
  };
  return <SeoPreviewCard {...props} />;
};
