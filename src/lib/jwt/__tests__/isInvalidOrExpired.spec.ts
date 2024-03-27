import { isInvalidOrExpired } from '@lib/jwt/isInvalidOrExpired';
import * as jwt from '@lib/jwt/parseJwt';

jest.mock('@lib/jwt/parseJwt');

const mockedParsedJwt = jwt as jest.Mocked<typeof jwt>;

const validToken = {
  aud: 'tiket.com',
  sub: '61b90cec12ab55609363a35d',
  nbf: 1639517492,
  iss: 'https://www.tiket.com',
  exp: Date.now(),
  email: 'dummy@tiket.com',
};

const expiredToken = {
  ...validToken,
  exp: 0,
};

const inValidToken = {};

describe('isInvalidOrExpired', () => {
  describe('given valid token', () => {
    it('should return false', () => {
      mockedParsedJwt.parseJWT.mockReturnValueOnce(validToken);

      const result = isInvalidOrExpired('valid.dummy.token');
      expect(result).toEqual(false);
    });
  });

  describe('given expired token', () => {
    it('should return true', () => {
      mockedParsedJwt.parseJWT.mockReturnValueOnce(expiredToken);

      const result = isInvalidOrExpired('expired.dummy.token');
      expect(result).toEqual(true);
    });
  });

  describe('given invalid token', () => {
    it('should return true', () => {
      mockedParsedJwt.parseJWT.mockReturnValueOnce(inValidToken);

      const result = isInvalidOrExpired('invalid.dummy.token');
      expect(result).toEqual(true);
    });
  });
});
