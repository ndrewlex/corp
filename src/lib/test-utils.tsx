import type { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { HelpCenterHomeContext } from '@contexts/helpCenterHome';

import { mockCsTrackerList } from './mocks/data/csTrackers';
import { CsTrackersData } from './types/csTrackers.type';

/* React Testing Library */
type RenderProvidersConfig = {
  useHelpCenterHomeProvider?: {
    csTrackersData?: CsTrackersData;
  } | null;
  children?: React.ReactNode;
} & RenderOptions;

// Ref: https://testing-library.com/docs/react-testing-library/setup#custom-render
const AllTheProviders: FC<RenderProvidersConfig> = (props) => {
  const { children, useHelpCenterHomeProvider } = props;

  // wrap children with other providers that you may use, e.g. react-query <QueryClientProvider>
  let WrappedComponent = <>{children}</>;

  if (useHelpCenterHomeProvider) {
    const { csTrackersData = mockCsTrackerList } = useHelpCenterHomeProvider;
    WrappedComponent = (
      <HelpCenterHomeContext.Provider value={{ csTrackers: csTrackersData }}>
        {WrappedComponent}
      </HelpCenterHomeContext.Provider>
    );
  }
  return WrappedComponent;
};

const customRender = (ui: ReactElement, options?: Omit<RenderProvidersConfig, 'wrapper'>) =>
  render(ui, { wrapper: (props) => <AllTheProviders {...props} {...options} /> });

/* Re-export testing related helpers */
export * from '@testing-library/react';
export { customRender as render };
export { default as mockRouter } from 'next-router-mock';
