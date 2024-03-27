import type { CsTicketVertical } from "@lib/types/csTrackers.type";
import { EnumVerticalType } from "@lib/vertical";


export type MockCsTicketVertical = {
  orderId: string;
  orderDetailId: string;
  vertical: string;
  verticalIcon: string;
  verticalData: CsTicketVertical;
};

export const mockCsOrderHotel: MockCsTicketVertical = {
  orderId: '1200370643',
  orderDetailId: '1200370644',
  vertical: EnumVerticalType.TIXHOTEL,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/5ec11ce0-ff6f-4a48-8d0d-2f66a59dfd7d-1686195838010-af9ca31ddcc5e6aacd7fc6d70ec47d20.png',
  verticalData: {
    orderName: 'Shakti Hotel Jakarta',
    orderNameDetail: 'room shakti 1',
    startTimestamp: '2022-12-22 12:00:00',
    bookingNight: '1',
  },
};

export const mockCsOrderHotelHomes: MockCsTicketVertical = {
  orderId: '1200802183',
  orderDetailId: '1200882844',
  vertical: EnumVerticalType.HOTEL_HOMES,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/5ec11ce0-ff6f-4a48-8d0d-2f66a59dfd7d-1686195838010-af9ca31ddcc5e6aacd7fc6d70ec47d20.png',
  verticalData: {
    orderName: 'Delu Villas & Suites',
    orderNameDetail: 'Two Queen Bed Superior Room',
    startTimestamp: '2023-11-27 14:00:00',
    bookingNight: '3',
  },
};

export const mockCsOrderFlight: MockCsTicketVertical = {
  orderId: '1200370641',
  orderDetailId: '1200370642',
  vertical: EnumVerticalType.FLIGHT,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/bb4746e9-2fe3-4f92-9879-53ab60125f5c-1686195837647-576ede772f33adb0ff2db8c27f224b20.png',
  verticalData: {
    orderName: 'KNO (Medan - Kuala Namu) - CGK (Jakarta - Soekarno Hatta) ',
    orderNameDetail: 'Garuda Indonesia (GA 185 depart)',
    startTimestamp: '2022-12-22 12:00:00',
    depCityName: 'Kuala Lumpur',
    arrCityName: 'Singapore',
    airlinesName: 'JETSTAR',
    depAirportName: 'Kuala Lumpur International Airport',
  },
};

export const mockCsOrderTrain: MockCsTicketVertical = {
  orderId: '1201370645',
  orderDetailId: '1201370646',
  vertical: EnumVerticalType.TRAIN,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/279671fb-63c1-41e6-8668-81f2c3122409-1686195836496-7441c5479dbcb3304ddec01ebb613e36.png',
  verticalData: {
    orderName: 'BD (Bandung) - SMT (Semarangtawang)',
    orderNameDetail: 'JS TRANSIT 2016 (Economy)',
    startTimestamp: '2022-12-22 12:00:00',
    departureStation: 'Kiaracondong',
    arrivalStation: 'Jatinegara',
    trainDetail: 'JS TRANSIT 2016C',
  },
};

export const mockCsOrderBus: MockCsTicketVertical = {
  orderId: '1200792161',
  orderDetailId: '1200322860',
  vertical: EnumVerticalType.BUS,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/279671fb-63c1-41e6-8668-81f2c3122409-1686195836496-7441c5479dbcb3304ddec01ebb613e36.png',
  verticalData: {
    orderName: 'Jakarta - Bandung',
    orderNameDetail: 'Tiketux Mercedezz - asdf',
    startTimestamp: '2023-11-29 03:00:00',
    busOperatorName: 'Tiketux Testing',
    busDepartureCityName: 'Jakarta',
    busArrivalCityName: 'Bandung',
  },
};

export const mockCsAirportTransfer: MockCsTicketVertical = {
  orderId: '1200352508',
  orderDetailId: '1200093099',
  vertical: EnumVerticalType.AIRPORT_TRANSFER,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/279671fb-63c1-41e6-8668-81f2c3122409-1686195836496-7441c5479dbcb3304ddec01ebb613e36.png',
  verticalData: {
    orderName: 'AIRPORT-TRANSFER',
    startTimestamp: '2023-10-19 23:00:00',
    orderNameDetail: 'Monumen Nasional - Soekarno-Hatta',
    pickupLocation:
      'Monumen Nasional, RT.5/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110, Indonesia',
    fleetName: 'Mobil Super Standard',
  },
};

export const mockCsOrderCar: MockCsTicketVertical = {
  orderId: '1200722151',
  orderDetailId: '1200252783',
  vertical: EnumVerticalType.CAR,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/279671fb-63c1-41e6-8668-81f2c3122409-1686195836496-7441c5479dbcb3304ddec01ebb613e36.png',
  verticalData: {
    orderName: 'All New Avanza',
    orderNameDetail: 'All New Avanza Sylvia Rental Jkt Car',
    fleetName: 'Toyota All New Avanza',
    regionalName: 'Bali',
    startTimestamp: '2023-09-04 09:00:00',
  },
};

export const mockCsOrderFerry: MockCsTicketVertical = {
  orderId: '1201370645',
  orderDetailId: '1201370649',
  vertical: EnumVerticalType.FERRY,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/279671fb-63c1-41e6-8668-81f2c3122409-1686195836496-7441c5479dbcb3304ddec01ebb613e36.png',
  verticalData: {
    orderName: 'Merak - Bakauheni',
    orderNameDetail: 'Reguler - Sepeda',
    departurePort: 'Merak',
    arrivalPort: 'Bakauheni',
    ferryOperatorDisplayName: 'Reguler',
    ticketTypeCode: 'Bicycle',
    startTimestamp: '2022-12-22 12:00:00',
  },
};

export const mockCsOrderEvent: MockCsTicketVertical = {
  orderId: '1200732211',
  orderDetailId: '1200262791',
  vertical: EnumVerticalType.EVENT,
  verticalIcon:
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/06/08/279671fb-63c1-41e6-8668-81f2c3122409-1686195836496-7441c5479dbcb3304ddec01ebb613e36.png',
  verticalData: {
    orderName: 'Login Konser Maroon 5 Murah',
    orderNameDetail: 'Paket Satu Non-Multiguest',
    startTimestamp: '2022-12-22 12:00:00',
  },
};
