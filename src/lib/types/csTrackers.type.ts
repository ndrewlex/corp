
export type CsTicketLabelColorType = 'WHITE' | 'BLUE' | 'ORANGE' | 'GREEN' | null;

export type CsTicketVertical = {
  orderName: string;
  orderNameDetail: string;
  startTimestamp: string;
  depCityName?: string;
  arrCityName?: string;
  airlinesName?: string;
  depAirportName?: string;
  bookingNight?: string;
  busDepartureCityName?: string;
  busArrivalCityName?: string;
  busOperatorName?: string;
  fleetName?: string;
  pickupLocation?: string;
  regionalName?: string;
  departureStation?: string;
  arrivalStation?: string;
  trainDetail?: string;
  ferryOperatorDisplayName?: string;
  ticketTypeCode?: string;
  departurePort?: string;
  arrivalPort?: string;
};

export type CsTicketData = {
  caseId: string;
  caseNumber: string;
  caseCategory: string;
  orderId: string;
  orderDetailId: string;
  status: string;
  labelColor: CsTicketLabelColorType;
  caseDescription: string;
  vertical: string;
  verticalIcon: string;
  verticalData: CsTicketVertical;
  sla: string;
  isExpired: boolean;
  lastUpdate: string;
  userWhatsapp: string | null;
  customerCareWhatsapp: string | null;
};

export type CsTrackerPagination = {
  nextCursor: string;
  prevCursor: string;
  hasNext: boolean;
  hasPrev: boolean;
};

export type CsTrackersData = {
  tickets: CsTicketData[];
};

export type CsTrackerStepperData = {
  title: string;
  updateDate: string;
  content: string;
  agentName: string;
  isLast: boolean;
};

export type CsTrackerDetailData = {
  stepper: CsTrackerStepperData[];
} & CsTicketData;
