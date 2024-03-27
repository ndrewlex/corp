import type { FetchInitArg } from './type';

import { isServer } from '@lib/fetch/constructFetchInit';

const serverSideGatewayEndpoint = 'https://endpoint' + '/gateway';
const BASE_URL = process.env.BASE_URL;

export const transformUrl = (endpoint: string, initArg: FetchInitArg): string => {
  const isNonGateway = endpoint.includes('http');

  if (isNonGateway) {
    return endpoint;
  } else if (isServer(initArg)) {
    return serverSideGatewayEndpoint + endpoint;
  } else {
    const origin = BASE_URL ?? location.origin;
    return `${origin}/ms-gateway${endpoint}`;
  }
};
