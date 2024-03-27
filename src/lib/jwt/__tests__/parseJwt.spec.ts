import { parseJWT } from '../parseJwt';

describe('parseJWT', () => {
  it('should return an empty object if the token is invalid', () => {
    const token = 'invalid_token';
    const result = parseJWT(token);
    expect(result).toEqual({});
  });

  it('should parse a valid JWT token and return the decoded payload', () => {
    const token =
      'eyJraWQiOiJOTUZaZEc3dVZ3Y1ZHOHVrVHRLMHZHdDBTUXd3Q1p4QiJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2NTU1YjFlNzgxYmFjNjE1ZGYxOWQ0NDEiLCJuYmYiOjE3MDAxMTQ5MTksImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTcwMDcxOTcxOX0.CstbLFze8yDB4jLZ5naTJKp2oFzkbScB4bPvbSYru7jlb4Usgg6zR-t46Hw6onKA';
    const result = parseJWT(token);
    expect(result).toEqual({
      aud: 'tiket.com',
      sub: '6555b1e781bac615df19d441',
      nbf: 1700114919,
      iss: 'https://www.tiket.com',
      exp: 1700719719,
    });
  });

  it('should return an empty object if parsing data as not string', () => {
    const token = undefined as any;
    const result = parseJWT(token);
    expect(result).toEqual({});
  });
});
