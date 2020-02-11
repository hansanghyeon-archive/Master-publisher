import '@storybook/addon-actions/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-backgrounds/register';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import '@storybook/addon-docs';

addons.setConfig({
  theme: themes.dark,
});
