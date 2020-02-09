import { configure, addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: 'dark', value: '#232326', default: true },
    { name: 'light', value: '#fff' },
  ],
  viewport: {
    defaultViewport: 'someDefualt',
  },
})

configure(
  require.context('../src/components', true, /\.stories\.tsx$/),
  module,
);
