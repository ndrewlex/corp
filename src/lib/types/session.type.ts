export type Session = AuthenticatedSession | GuestSession;

export type AuthenticatedSession = {
  sessionId: string;
  accountId: number;
  username: string;
  firstname: string;
  lastname: string;
  audience: string;
  isRefreshToken: boolean;
  deviceId: string | null;
  loginMedia: string | null;
  verifiedPhoneNumber: boolean;
  language: string;
  currency: string | null;
  oldSessionId: string | null;
  oldSessionType: string | null;
  tixPoint: number;
  loyaltyLevel: {
    key: string;
    value: string;
  };
  accessToken: string | null;
  refreshToken: string | null;
  group: string;
  role: string;
  priv: string;
  businessId: string;
  b2bCorporateResponseData: Record<string, any>;
};

export type GuestSession = {
  sessionId: string | null;
  accountId: null;
  username: '';
  firstname: null;
  lastname: null;
  audience: string;
  isRefreshToken: null;
  deviceId: null;
  loginMedia: null;
  verifiedPhoneNumber: null;
  language: null;
  currency: null;
  oldSessionId: null;
  oldSessionType: null;
  tixPoint: null;
  loyaltyLevel: null;
  accessToken: null;
  refreshToken: null;
  group: null;
  role: null;
  priv: null;
  businessId: null;
  b2bCorporateResponseData: null;
};

export type JWT = {
  accessToken: string;
  refreshToken: string;
};
