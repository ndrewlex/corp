type ResponseError = {
  status: boolean;
  msg: string;
  code: number;
};

export type SuccessResponse<TData> = {
  code: 'SUCCESS';
  data: TData;
  message: string;
  errors?: ResponseError;
  serverTime: string | number;
};

export type ErrorResponseCode =
  | 'ERROR'
  | 'RUNTIME_ERROR'

export type ErrorResponseCodeWithData = 'NOT_ELIGIBLE_RESCHEDULE' | 'NOT_ELIGIBLE_REFUND';

export type ErrorResponse = {
  code: ErrorResponseCode;
  data: null;
  message: string;
  errors?: ResponseError;
  serverTime?: string | number;
  status?: number;
};

export type ErrorResponseWithData<TData> = {
  code: ErrorResponseCodeWithData;
  message: string;
  data: TData;
  errors?: ResponseError;
  serverTime: string;
  status?: number;
};

export type APIResponse<TData> =
  | SuccessResponse<TData>
  | ErrorResponse
  | ErrorResponseWithData<TData>;
