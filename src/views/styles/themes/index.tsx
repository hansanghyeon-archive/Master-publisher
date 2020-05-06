import React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import DefaultTheme, { DarkTheme, styleTheme } from './4log';

export enum ThemeList {
  light = 'light',
  dark = 'dark',
}
type props = {
  children: React.ReactNode;
  theme?: keyof typeof ThemeList;
};
const ThemeProvider = ({ children, theme }: props) => {
  const choiceTheme = (): styleTheme => {
    if (!theme) return DefaultTheme;
    switch (ThemeList[theme]) {
      case ThemeList.light:
        return DefaultTheme;
      case ThemeList.dark:
        return DarkTheme;
      default:
        return DefaultTheme;
    }
  };
  return (
    <OriginalThemeProvider theme={choiceTheme}>
      <>{children}</>
    </OriginalThemeProvider>
  );
};

export const Themes = {
  DefaultTheme,
  DarkTheme,
};

export default ThemeProvider;
