import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import CenterWrap from '@atom/wrap/Center';
import SeriesList from '.';

export default {
  title: '02. molecules/List/Series',
  component: SeriesList,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const props = {
    data: {
      query: {
        series: {
          name: 'SSR, CSR 그것이 궁금하다',
          posts: {
            edges: [
              {
                node: {
                  slug: 'what-is-spa',
                  title: 'SPA란?',
                },
              },
              {
                node: {
                  slug: 'which-ssr-or-csr-should-be-used',
                  title: 'SSR, CSR 도대체 무엇이 좋을까?',
                },
              },
            ],
          },
        },
      },
    },
  };
  return <SeriesList {...props} />;
};
