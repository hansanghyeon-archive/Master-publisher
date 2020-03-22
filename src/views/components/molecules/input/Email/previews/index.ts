import { DEFAULT_REACT_CODESANDBOX } from 'storybook-addon-preview';
import REACT_TEMPLATE from './ReactTemplate';
import CSS_TEMPLATE from './CssTemplate';

export default [
  {
    // previews["React"][0]
    tab: 'React',
    template: REACT_TEMPLATE,
    language: 'tsx',
    codesandbox: DEFAULT_REACT_CODESANDBOX([
      'styled-components',
      '@types/styled-components',
      'gsap',
      '@types/gsap',
      'lodash',
    ]),
  },
  {
    // previews["CSS"][0]
    tab: 'CSS',
    template: CSS_TEMPLATE,
  },
];
