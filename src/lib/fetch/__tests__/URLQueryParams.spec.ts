import { addQueryParams, stringifyURLQuery } from '../URLQueryParams';

describe('stringifyURLQuery', () => {
  it('should convert params object to URL query string', () => {
    const params = {
      key1: 'value1',
      key2: 'value2',
    };

    const result = stringifyURLQuery(params);

    expect(result).toBe('key1=value1&key2=value2');
  });

  it('should handle empty params object', () => {
    const params = {};

    const result = stringifyURLQuery(params);

    expect(result).toBe('');
  });
});

describe('addQueryParams', () => {
  it('should add query parameters to the URL', () => {
    const url = 'https://example.com';
    const queryParams = {
      key1: 'value1',
      key2: 'value2',
    };

    const result = addQueryParams(url, queryParams);

    expect(result).toBe('https://example.com?key1=value1&key2=value2');
  });

  it('should handle empty URL', () => {
    const url = '';
    const queryParams = {
      key1: 'value1',
      key2: 'value2',
    };

    const result = addQueryParams(url, queryParams);

    expect(result).toBe('');
  });

  it('should handle URL with existing query parameters', () => {
    const url = 'https://example.com?key1=value1';
    const queryParams = {
      key2: 'value2',
      key3: 'value3',
    };

    const result = addQueryParams(url, queryParams);

    expect(result).toBe('https://example.com?key1=value1&key2=value2&key3=value3');
  });

  it('should handle empty query parameters', () => {
    const url = 'https://example.com';
    const queryParams = {};

    const result = addQueryParams(url, queryParams);

    expect(result).toBe('https://example.com?');
  });
});
