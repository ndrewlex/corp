import { isJWTPattern } from '../isJWTPattern';

describe('isJWTPattern', () => {
  it('should return true for a valid JWT pattern', () => {
    const validJWT =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const result = isJWTPattern(validJWT);
    expect(result).toEqual([validJWT]);
  });

  it('should return false for an invalid JWT pattern', () => {
    const invalidJWT = 'invalid-jwt-pattern';
    const result = isJWTPattern(invalidJWT);
    expect(result).toBe(null);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    const result = isJWTPattern(emptyString);
    expect(result).toBe(null);
  });
});
