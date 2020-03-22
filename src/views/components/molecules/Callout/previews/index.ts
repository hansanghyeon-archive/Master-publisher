import { DEFAULT_REACT_CODESANDBOX } from 'storybook-addon-preview';
import Dependencies from '@utile/codesandboxDependencies';
import DefaultTheme from '@style/themes/4log';
import REACT_TEMPLATE from './ReactTemplate';

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
    template: `
body {
  background-color: ${DefaultTheme.color.bg[0]}
}
* {
  box-sizing: border-box;
}
    `,
  },
];
