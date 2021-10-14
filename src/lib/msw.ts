import { isServer } from '@/constants/environment';

export const initMSW = () => {
  if (process.env.NODE_ENV === 'development') {
    if (!isServer) {
      const { worker } = require('../mocks/browser');
      worker.start();
    }
  }
};
