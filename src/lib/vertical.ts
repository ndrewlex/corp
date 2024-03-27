import { OrderType } from "./types/order.type";

export const EnumVerticalType = {
  TIXHOTEL: 'tixhotel' as OrderType,
  FLIGHT: 'flight' as OrderType,
  EVENT: 'event' as OrderType,
  TRAIN: 'train' as OrderType,
  CAR: 'car' as OrderType,
  AIRPORT_TRANSFER: 'airport_transfer' as OrderType,
  RAILINK: 'railink' as OrderType,
  HOTEL_HOMES: 'hotel_homes' as OrderType,
  BUS: 'bus' as OrderType,
  FERRY: 'ferry' as OrderType,
} as const;
