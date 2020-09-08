import '@storybook/addon-knobs/register';
import 'themeprovider-storybook/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-viewport/register';
import { addons } from '@storybook/addons';
import '@storybook/addon-docs/register';
import 'prism-themes/themes/prism-dracula.css';
import './style.css';
import yourTheme from './yourTheme';

addons.setConfig({
  theme: yourTheme,
});
