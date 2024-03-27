import { REGEX_JWT } from '@lib/config/regex';

export const isJWTPattern = (jwt: string) => {
  return String(jwt).match(REGEX_JWT);
};
