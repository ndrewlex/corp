import type { CommonFetchInitArg, ApiFetchInitArg, ServerFetchInitArg } from './type';

import { serialize } from 'cookie';

import { COOKIE_CONFIG, isInvalidOrExpired } from '@lib/jwt';
import { createJwtToken, refreshJwtToken } from '@lib/services/session';

type ServerInitArg = ServerFetchInitArg | ApiFetchInitArg;
type Arg = ServerInitArg & CommonFetchInitArg;

export const refreshOrCreateTokenServer = async (initArg: Arg) => {
  const { req } = initArg.ctx;

  const accessToken = req.cookies['session_access_token'];
  const refreshToken = req.cookies['session_refresh_token'];

  const isAccessTokenInvalidOrExpired = isInvalidOrExpired(accessToken || "");
  const isRefreshTokenInvalidOrExpired = isInvalidOrExpired(refreshToken || "");

  if (isAccessTokenInvalidOrExpired && !isRefreshTokenInvalidOrExpired) {
    await refreshJwtTokenAndSetCookie(initArg);
  } else if (
    isAccessTokenInvalidOrExpired &&
    isRefreshTokenInvalidOrExpired &&
    initArg.createGuestToken
  ) {
    await createJwtTokenAndSetCookie(initArg);
  }
};

export const createJwtTokenAndSetCookie = async (initArg: Arg) => {
  const { req, res } = initArg.ctx;
  const result = await createJwtToken(req, res);
  const isSuccess = result.code === 'SUCCESS';

  if (isSuccess) {
    setCookieToken(initArg, result.data.accessToken, result.data.refreshToken);
  }
};

export const refreshJwtTokenAndSetCookie = async (initArg: Arg) => {
  const { req, res } = initArg.ctx;
  const result = await refreshJwtToken(req, res);
  const isSuccess = result.code === 'SUCCESS';

  if (isSuccess) {
    setCookieToken(initArg, result.data.accessToken, result.data.refreshToken);
  }
};

export const setCookieToken = (initArg: Arg, accessToken: string, refreshToken: string) => {
  const { req, res } = initArg.ctx;
  res.setHeader('Set-Cookie', [
    serialize('session_access_token', accessToken, COOKIE_CONFIG),
    serialize('session_refresh_token', refreshToken, COOKIE_CONFIG),
  ]);

  // overwrite current req cookies that will be needed for further process (constructFetchInit)
  req.cookies['session_access_token'] = accessToken;
  req.cookies['session_refresh_token'] = refreshToken;
};
