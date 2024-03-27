import type {
  ClientFetchInitArg,
  InitArg,
  ServerFetchInitArg,
  StaticFetchInitArg,
} from './type';

/**
 * Util function to create init options (2nd argument of fetch)
 * - with `lang` header (client, getServerSideProps, getStaticProps)
 * - with `Authorization` header (getServerSideProps only)
 *
 * Works for client-side and also server-side (getServerSideProps, getStaticProps) fetches with
 * different signatures:
 * - Client-side: accepts `locale`
 * - Server-side: accepts `ctx`
 */
export function constructFetchInit({ locale, opts }: ClientFetchInitArg): RequestInit;
export function constructFetchInit({ ctx, opts }: ServerFetchInitArg): RequestInit;
export function constructFetchInit(arg: InitArg): RequestInit {
  return {
    ...arg.opts,
    headers: {
      ...arg.opts?.headers,
    },
  };
}

export const isServer = (arg: InitArg): arg is ServerFetchInitArg => {
  return 'ctx' in arg && 'req' in arg.ctx && 'res' in arg.ctx;
};

export const isStatic = (arg: InitArg): arg is StaticFetchInitArg => {
  return 'ctx' in arg && 'locale' in arg.ctx;
};
