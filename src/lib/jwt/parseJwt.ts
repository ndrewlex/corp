import { ParsedJwt } from "./types";

export const parseJWT = (token: string): ParsedJwt => {
  try {
    let result = {};
    const base64Url = typeof token === 'string' ? token.split('.')[1] : '';

    if (token && base64Url) {
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        Buffer.from(base64, 'base64')
          .toString()
          .split('')
          .map(function (c) {
            return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
          })
          .join('')
      );

      result = JSON.parse(jsonPayload);
    }

    return result;
  } catch (e) {
    // istanbul ignore next
    return {};
  }
};
