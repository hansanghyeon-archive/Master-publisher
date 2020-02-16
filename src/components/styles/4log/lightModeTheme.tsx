import { lightStyleSystem } from '@style/styleSystem';
import { lighten } from 'polished';

const darkModeTheme: lightStyleSystem = {
  color: {
    primary: '#5033e5',
    primaryLight: lighten(0.1, '#5033e5'),
    grayscales: {
      dark: ['#12171f', '#161a23', '#181c27', '#1f2330', '#252836', '#303645'],
      light: ['#ffffff', '#e6ecf8', '#9ba4b7', '#6d7484', '#404655'],
    },
  },
};

export default darkModeTheme;
