import type { CookieSerializeOptions } from 'cookie';

export const COOKIE_CONFIG: CookieSerializeOptions = {
  path: '/',
  domain: '.tiket.com',
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 15,
  sameSite: 'lax',
};

export { isInvalidOrExpired, isExpired } from './isInvalidOrExpired';
export { parseJWT } from './parseJwt';
