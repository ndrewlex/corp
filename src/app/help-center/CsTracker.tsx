import { useContext } from 'react';

import { HelpCenterHomeContext } from '@contexts/helpCenterHome';

const CsTracker = () => {
  const { csTrackers } = useContext(HelpCenterHomeContext);
  return (
    <div>
      {csTrackers.tickets.map((cs) => (
        <div data-testid={cs.caseId} key={cs.caseId}>
          {cs.caseId}
        </div>
      ))}
    </div>
  );
};

export default CsTracker;
