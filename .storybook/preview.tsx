import React from 'react';
import * as nextImage from 'next/image';
import { GlobalStyle } from '@/styles';
import Layout from '@/components/Layout';
import { Story } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story: Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Story />
        </Layout>
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
  value: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} />,
});
