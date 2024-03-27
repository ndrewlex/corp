import { serialize } from 'cookie';

import { COOKIE_CONFIG } from '@lib/jwt';
import { createJwtToken } from '@lib/services/session';

type Data = {
  code: 'SUCCESS' | 'FAILED';
  message: string;
};

import type { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const result = await createJwtToken(req, res);
    const isSuccess = result.code === 'SUCCESS';
    const { message } = result;

    if (isSuccess) {
      res.setHeader('Set-Cookie', [
        serialize('session_access_token', result.data.accessToken, COOKIE_CONFIG),
        serialize('session_refresh_token', result.data.refreshToken, COOKIE_CONFIG),
      ]);
    }
    res.status(isSuccess ? 200 : 500).json({ code: isSuccess ? 'SUCCESS' : 'FAILED', message });
  } catch (e) {
    res.status(500).json({ code: 'FAILED', message: 'Something went wrong!' });
  }
};

export default handler;
