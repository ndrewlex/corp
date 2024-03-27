import type { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import type { IncomingMessage, ServerResponse } from 'http';

export type ParamsValueType = string | number | string[] | number[] | boolean;

export type ParamsType = {
  [key: string]: ParamsValueType;
};

type OptsType = {
  params?: ParamsType;
} & RequestInit;

type CommonInitArg = {
  opts?: OptsType;
};

export type FetchApiRequest = {
  cookies: Partial<{
    [key: string]: string;
  }>;
} & IncomingMessage;

export type FetchApiResponse = ServerResponse;

export type ClientFetchInitArg = {
  locale?: string;
} & CommonInitArg;

export type ServerFetchInitArg = {
  ctx: GetServerSidePropsContext;
} & CommonInitArg;

export type StaticFetchInitArg = {
  ctx: GetStaticPropsContext;
} & CommonInitArg;

export type ApiFetchInitArg = {
  ctx: {
    req: FetchApiRequest;
    res: FetchApiResponse;
  };
} & CommonInitArg;

export type InitArg = ClientFetchInitArg | StaticFetchInitArg | ServerFetchInitArg;

export type CommonFetchInitArg = {
  createGuestToken?: boolean;
  skipAuth?: boolean;
  retry?: number;
};

export type FetchInitArg = CommonFetchInitArg & InitArg;
