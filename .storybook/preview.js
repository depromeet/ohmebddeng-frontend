import React from 'react';
import * as nextImage from 'next/image';
import { GlobalStyle } from '@/styles';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
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