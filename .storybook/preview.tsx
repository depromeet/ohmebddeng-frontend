import React from 'react';
import * as nextImage from 'next/image';
import { GlobalStyle } from '@/styles';
import { Story } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story: Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});