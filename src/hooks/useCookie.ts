import { useCallback, useState } from 'react';
import { Cookie } from '@lib/cookie';

const useCookie = (key: string, defaultValue: string) => {
  const [cookie, setCookie] = useState(() => {
    if (!Boolean(key)) return defaultValue;

    return (Cookie.get(key) || defaultValue) as string;
  });

  const updateCookie = useCallback(
    (cookieKey: string, data: Record<string, string>, expireMinute = 60 * 24 * 7) => {
      const cookieValue = JSON.stringify(data);
      setCookie(cookieValue);

      Cookie.set(cookieKey, cookieValue, expireMinute, '', true);
    },
    []
  );

  return [cookie, updateCookie] as [
    string,
    (cookieKey: string, data: Record<string, string>, expireMinute?: number) => void
  ];
};

export default useCookie;
