
import type { CsTicketData, CsTicketLabelColorType } from '@lib/types/csTrackers.type';

import {
  mockCsAirportTransfer,
  mockCsOrderBus,
  mockCsOrderCar,
  mockCsOrderEvent,
  mockCsOrderFerry,
  mockCsOrderFlight,
  mockCsOrderHotel,
  mockCsOrderHotelHomes,
  mockCsOrderTrain,
  type MockCsTicketVertical,
} from './vertical';


type GetMockCsTicketArgs = {
  isSla?: boolean;
  labelColor?: CsTicketLabelColorType;
  vertical: MockCsTicketVertical;
};

export const getMockCsTicket = ({
  isSla = false,
  labelColor = 'GREEN',
  vertical,
}: GetMockCsTicketArgs): CsTicketData => ({
  caseId: vertical.orderDetailId,
  caseNumber: 'A12345678',
  caseCategory: 'RESCHEDULE',
  status: 'Ditangani',
  caseDescription: 'Kendala E-Tiket',
  sla: '2023-09-20T14:30:00Z',
  lastUpdate: '2023-09-23T14:30:00Z',
  labelColor,
  isExpired: isSla ? true : false,
  userWhatsapp: '+6287872878954',
  customerCareWhatsapp: '+6285881105451',
  ...vertical,
});


export const mockCsTrackerList = {
  tickets: [
    getMockCsTicket({ isSla: true, vertical: mockCsOrderHotel }),
    getMockCsTicket({ isSla: false, vertical: mockCsOrderHotelHomes }),
    getMockCsTicket({ isSla: false, vertical: mockCsOrderFlight }),
    getMockCsTicket({ isSla: false, vertical: mockCsOrderTrain }),
    getMockCsTicket({ isSla: false, vertical: mockCsOrderBus }),
    getMockCsTicket({ isSla: false, vertical: mockCsAirportTransfer }),
    getMockCsTicket({ isSla: false, vertical: mockCsOrderCar }),
    getMockCsTicket({ isSla: false, vertical: mockCsOrderFerry }),
    getMockCsTicket({ isSla: false, vertical: mockCsOrderEvent }),
  ],
};

export const mockEmptyCsTrackerList = {
  tickets: [],
};
