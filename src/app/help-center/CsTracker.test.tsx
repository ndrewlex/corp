import { mockCsTrackerList } from '@lib/mocks/data/csTrackers';
import { render, screen } from '@lib/test-utils';

import CsTracker from './CsTracker';

const setupRender = () => {
  return render(<CsTracker />, {
    useHelpCenterHomeProvider: {
      csTrackersData: mockCsTrackerList,
    },
  });
};

describe('CsTracker', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should able to render change lang bottomsheet when button is clicked', async () => {
    setupRender();
    const caseId = await screen.findByText(mockCsTrackerList.tickets[0].caseId);
    expect(caseId).toBeDefined();
  });
});
