import { DEFAULT_REACT_CODESANDBOX } from 'storybook-addon-preview';
import Dependencies from '@utile/codesandboxDependencies';
import REACT_TEMPLATE from './ReactTemplate';
import CSS_TEMPLATE from './CssTemplate';

export default [
  {
    // previews["React"][0]
    tab: 'React',
    template: REACT_TEMPLATE,
    language: 'tsx',
    codesandbox: DEFAULT_REACT_CODESANDBOX(Dependencies),
  },
  {
    // previews["CSS"][0]
    tab: 'CSS',
    template: CSS_TEMPLATE,
  },
];
