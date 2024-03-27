import { createContext, FC, ReactNode } from 'react';

import { mockCsTrackerList } from '@lib/mocks/data/csTrackers';
import { CsTrackersData } from '@lib/types/csTrackers.type';

type HelpCenterHomeContextData = {
  csTrackers: CsTrackersData;
};

const HelpCenterHomeContext = createContext<HelpCenterHomeContextData>({
  csTrackers: {
    tickets: [],
  },
});

type HelpCenterHomeProviderType = {
  children: ReactNode;
};

const HelpCenterHomeProvider: FC<HelpCenterHomeProviderType> = ({ children }) => {
  const value = {
    csTrackers: mockCsTrackerList,
  };

  return (
    <HelpCenterHomeContext.Provider value={value}> {children} </HelpCenterHomeContext.Provider>
  );
};

export { HelpCenterHomeProvider, HelpCenterHomeContext };
