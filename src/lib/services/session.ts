import { error } from "@lib/fetch";
import type { ApiFetchInitArg, FetchApiRequest, FetchApiResponse, ServerFetchInitArg } from "@lib/fetch/type";
import type { APIResponse } from "@lib/types/apiResponse.type";
import type { JWT, Session } from "@lib/types/session.type";

import { fetch } from "@lib/fetch"

const serverSideEndpoint = process.env.SERVER_SIDE_SERVICE_ENDPOINT;

export const getSession = async (initArg: ServerFetchInitArg): Promise<APIResponse<Session>> => {
  try {
    const result = await fetch(
      `${serverSideEndpoint}/test/v1/session/validate`,
      initArg
    );
    return await result.json();
  } catch (e) {
    return error(e);
  }
};

export const createJwtToken = async (
  req: FetchApiRequest,
  res: FetchApiResponse
): Promise<APIResponse<JWT>> => {
  try {
    const initArg: ApiFetchInitArg = { ctx: { req, res } };
    const result = await fetch('/test/v1/session', {
      ...initArg,
      opts: {
        method: 'POST',
      },
    });
    return await result.json();
  } catch (e) {
    return error(e);
  }
};

export const refreshJwtToken = async (
  req: FetchApiRequest,
  res: FetchApiResponse
): Promise<APIResponse<JWT>> => {
  try {
    const initArg: ApiFetchInitArg = { ctx: { req, res } };
    const result = await fetch('/test/v1/session/refresh', {
      ...initArg,
      skipAuth: true,
      opts: {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${initArg.ctx.req?.cookies['session_refresh_token']}`,
        },
      },
    });
    return await result.json();
  } catch (e) {
    return error(e);
  }
};
