import { ReactElement } from 'react';
import { render } from '@testing-library/react';

const Providers = ({ children }: { children: ReactElement }) => children;

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
