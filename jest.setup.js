/* Jest custom matchers
https://github.com/testing-library/jest-dom */
import '@testing-library/jest-dom';

/* MSW mock server
https://mswjs.io/docs/getting-started/integrate/node#setup */

const oldWindowLocation = window.location;
const oldWindowHistory = window.history;
const oldWindowMatchMedia = window.matchMedia;
const oldWindowOpen = window.open;

// Establish API mocking before all tests.
beforeAll(() => {
  Object.defineProperty(global, 'ResizeObserver', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })),
  });

  delete window.matchMedia;
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  delete window.location;
  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(oldWindowLocation),
      assign: {
        configurable: true,
        value: jest.fn(),
      },
      replace: {
        configurable: true,
        value: jest.fn(),
      },
      reload: {
        configurable: true,
        value: jest.fn(),
      },
      href: {
        configurable: true,
        writable: true,
        value: process.env.BASE_URL,
      },
      origin: {
        configurable: true,
        value: process.env.BASE_URL,
      },
      reload: {
        configurable: true,
        value: jest.fn(),
      },
    }
  );
});

delete window.history;
window.history = Object.defineProperties(
  {},
  {
    ...Object.getOwnPropertyDescriptors(oldWindowLocation),
    replaceState: {
      configurable: true,
      value: jest.fn(),
    },
    pushState: {
      configurable: true,
      value: jest.fn(),
    },
    back: {
      configurable: true,
      value: jest.fn(),
    },
    forward: {
      configurable: true,
      value: jest.fn(),
    },
    go: {
      configurable: true,
      value: jest.fn(),
    },
  }
);

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  if (typeof window !== 'undefined') {
    // Clear mock for webview implementation on Android
    Object.defineProperty(window, 'generic', {
      writable: true,
      value: null,
    });
    Object.defineProperty(window, 'native', {
      writable: true,
      value: null,
    });
    // Clear mock for webview implementation on iOS
    Object.defineProperty(window, 'webkit', {
      writable: true,
      value: null,
    });
  }
});

// Clean up after the tests are finished.
afterAll(() => {
  if (window) {
    window.location = oldWindowLocation;
    window.history = oldWindowHistory;
    window.matchMedia = oldWindowMatchMedia;
    window.open = oldWindowOpen;
  }
});

/* Mock Next.js dynamic routes
https://github.com/scottrippey/next-router-mock#dynamic-routes */
import mockRouter from 'next-router-mock';

import 'next-router-mock/dynamic-routes/next-13';

jest.spyOn(window.history, 'replaceState').mockImplementation((state, title, url) => {
  mockRouter.asPath = url;
});

/* Polyfill fetch
https://github.com/vercel/next.js/discussions/13678#discussioncomment-22383 */
require('next');

jest.mock('next/dist/client/router', () => require('next-router-mock'));
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (...props) => {
    const dynamicModule = jest.requireActual('next/dynamic');
    const dynamicActualComp = dynamicModule.default;
    const RequiredComponent = dynamicActualComp(props[0]);
    RequiredComponent.preload ? RequiredComponent.preload() : RequiredComponent.render.preload();
    return RequiredComponent;
  },
}));
jest.setTimeout(10000);
