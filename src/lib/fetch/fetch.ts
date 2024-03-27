import type { FetchInitArg } from './type';

import { constructFetchInit } from '@lib/fetch/constructFetchInit';
import { isServer } from '@lib/fetch/constructFetchInit';
import { injectServiceToServiceMandatoryHeaders } from '@lib/fetch/injectMandatoryHeaders';
import { refreshOrCreateTokenServer } from '@lib/fetch/refreshOrCreateToken.server';
import { transformUrl } from '@lib/fetch/transformUrl';
import { stringifyURLQuery } from '@lib/fetch/URLQueryParams';

const BASE_PREFIX_FOR_APP = process.env.NEXT_PUBLIC_BASE_PREFIX_FOR_APP ?? '';
const BASE_URL = process.env.BASE_URL;

const apiFetch = async (endpoint: string, initArg: FetchInitArg): Promise<Response> => {
  let url = transformUrl(endpoint, initArg);

  if (!!initArg.opts?.params) {
    const queryParams = stringifyURLQuery(initArg.opts.params);
    url = `${url}?${queryParams}`;
  }

  if (initArg.skipAuth) {
    return fetch(url, initArg.opts);
  }

  const isServerCall = isServer(initArg);

  if (isServerCall) {
    await refreshOrCreateTokenServer(initArg);
  }

  const args = constructFetchInit({
    ...initArg,
    ...injectServiceToServiceMandatoryHeaders(url, initArg),
  });

  let result = await fetch(url, args);

  if (!isServerCall && result.status === 401) {
    const retry = initArg.retry ?? 0;
    const origin = BASE_URL ?? location.origin;
    const apiUrl = origin + BASE_PREFIX_FOR_APP + '/api';
    const text = typeof result.text === 'function' ? await result.text() : '{}';
    const { code } = JSON.parse(text);

    if (retry === 0 && code === 'MISSING_ACCESS_TOKEN' && initArg.createGuestToken) {
      await apiFetch(`${apiUrl}/create-token`, initArg);
      result = await apiFetch(url, { ...args, retry: 1 });
    } else if (retry === 0) {
      const refresh = await apiFetch(`${apiUrl}/refresh-token`, initArg);
      const isInvalid = refresh.status === 400;
      if (isInvalid && initArg.createGuestToken) {
        await apiFetch(`${apiUrl}/create-token`, initArg);
      }
      result = await apiFetch(url, { ...args, retry: 1 });
    }
  }

  return result;
};

export { apiFetch as fetch };
