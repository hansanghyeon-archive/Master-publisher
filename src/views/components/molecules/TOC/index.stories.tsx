import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
import TOC from '.';

export default {
  title: '02. molecules/TOC',
  component: TOC,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const data = [
    '<h2>Puppeteer 란?</h2>',
    '<h3>Headless Browser</h3>',
    '<h2>📦 본격 NodeJS 구성</h2>',
    '<h3>Puppeteer를 사용해서 데이터 구성</h3>',
    '<h3>🤔 이미지 저장?</h3>',
    '<h3>🚀 데이터 return</h3>',
    '<h2>🏷 배포할 Dockerfile 셋팅</h2>',
  ];
  const props = {
    data,
  };
  return <TOC {...props} />;
};
