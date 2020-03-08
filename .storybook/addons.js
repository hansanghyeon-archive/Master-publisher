import '@storybook/addon-actions/register';
import '@storybook/addon-viewport/register';
import 'themeprovider-storybook/register';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import '@storybook/addon-docs';
import '@storybook/addon-knobs/register';
import 'storybook-addon-preview/register';

addons.setConfig({
  theme: themes.dark,
});
