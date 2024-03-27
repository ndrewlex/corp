import { HelpCenterHomeProvider } from '@contexts/helpCenterHome';

import CsTracker from './CsTracker';

const HelpCenterPage = () => {
  return (
    <HelpCenterHomeProvider>
      <CsTracker />
    </HelpCenterHomeProvider>
  );
};

export default HelpCenterPage;
