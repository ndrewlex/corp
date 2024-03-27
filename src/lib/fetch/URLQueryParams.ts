import type { ParamsType } from "./type";


export const stringifyURLQuery = (params: ParamsType) => {
  const convertedToString = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, value.toString()])
  );

  const searchParams = new URLSearchParams(convertedToString);

  return searchParams.toString();
};

export const addQueryParams = (url: string, queryParams: Record<string, string>): string => {
  if (!url) {
    return url;
  }

  // Check if the URL already has query parameters
  const [baseUrl, currentQueryParams] = url.split('?');

  const searchParams = new URLSearchParams(currentQueryParams);

  // Construct the query string from the queryParams object
  Object.entries(queryParams).forEach(([key, value]) => searchParams.set(key, value));

  // Concatenate the URL with the new query parameters
  return `${baseUrl}?${searchParams.toString()}`;
};
