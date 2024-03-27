import type { ErrorResponse } from '@lib/types/apiResponse';

export const error = (e: unknown): ErrorResponse => {
  return {
    code: 'RUNTIME_ERROR',
    message: e instanceof Error ? e.message : 'Oops, something went wrong!',
    data: null,
  };
};
