const canUseDOM = typeof window !== 'undefined';

export const Cookie = {
  set: function (
    cname: string,
    cvalue: string,
    expireMinute: number,
    path: string,
    crossSubDomain = false
  ) {
    if (!canUseDOM) return;

    const d = new Date();
    d.setTime(d.getTime() + expireMinute * 60 * 1000);

    const expires = `;expires=${d.toUTCString()}`;
    const cookiePath = `;path=${path || '/'}`;
    const domain = crossSubDomain
      ? `;domain=${window?.location?.hostname?.replace(/(en|m)\./, '') || '.tiket.com'}`
      : '';

    document.cookie = `${cname}=${cvalue + expires + domain + cookiePath}`;
  },

  setGlobalSession: function (cname: string, cvalue: string, path: string) {
    if (!canUseDOM) return;

    const cookiePath = `;path=${path || '/'}`;
    const domain = `;domain=.tiket.com`;
    document.cookie = `${cname}=${cvalue + domain + cookiePath}`;
  },

  // Get the value of cookie given a cookie key or return object if no key given
  // =([^;]+) get the matching value between = and anything before ";"
  get: function (name: string) {
    const documentCookie = document?.cookie || '';

    if (!canUseDOM || !documentCookie) return '';

    if (typeof name === 'undefined') {
      const targetCookie = documentCookie.match(new RegExp('([a-zA-Z0-9:._]+)=([^;]+)', 'g'));

      if (targetCookie) {
        return targetCookie
          .map(function (raw) {
            return raw.split('=');
          })
          .reduce(function (o, v) {
            o[v[0]] = v[1];

            return o;
          }, {} as Record<string, string>);
      }
      return {} as Record<string, string>;
    } else {
      const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
      return match && typeof match[1] !== 'undefined' ? match[1] : '';
    }
  },

  del: function (name: string) {
    if (!canUseDOM) return;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  },
};
