module.exports = {
  collectCoverageFrom: [
    '{src,pages,components,lib}/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [
    '@lib/test-utils.tsx',
    '@lib/services/*',
    '@lib/types/*',
    '@lib/mocks/*',
    '@lib/middlewares/*',
    '@lib/logger/*',
    '@lib/i18n/*',
    'pages/_app.page.tsx',
    'pages/_document.page.tsx',
    'pages/_middleware.page.tsx',
    'pages/script.tsx',
    // Ref: https://seanconnolly.dev/unit-testing-nextjs-api-routes
    'pages/api/*', // if you use Next.js API routes, remove this line
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
  coverageReporters: ['lcov', 'html', 'text'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/lib/mocks/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/src/lib/mocks/fileMock.js',

    // Handle @lib & @components aliases
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['next/babel'],
        plugins: [
          // Passport uses import.meta for assets
          'babel-plugin-transform-import-meta',
        ],
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!@tiket/)', '^.+\\.module\\.(css|sass|scss)$'],
  globalSetup: '<rootDir>/jestGlobalSetup.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
