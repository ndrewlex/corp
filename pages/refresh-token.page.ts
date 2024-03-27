import type { NextApiRequest, NextApiResponse } from 'next';

import { serialize } from 'cookie';

import { COOKIE_CONFIG } from '@lib/jwt';
import { refreshJwtToken } from '@lib/services/session';

type Data = {
  code: 'SUCCESS' | 'FAILED';
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>, test?: any) => {
  try {
    const result = await refreshJwtToken(req, res);
    const isSuccess = result.code === 'SUCCESS';
    const { message } = result;

    if (isSuccess) {
      res.setHeader('Set-Cookie', [
        serialize('session_access_token', result.data.accessToken, COOKIE_CONFIG),
        serialize('session_refresh_token', result.data.refreshToken, COOKIE_CONFIG),
      ]);
    }

    res
      .status(isSuccess ? 200 : result.status ?? 500)
      .json({ code: isSuccess ? 'SUCCESS' : 'FAILED', message });
  } catch (e) {
    res.status(500).json({ code: 'FAILED', message: 'Something went wrong!' });
  }
};

export default handler;
