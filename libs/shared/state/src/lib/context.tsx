import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery
} from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { globalStore } from './store';
import {
  LoginDocument,
  QueryLoginArgs,
  WhoAmIDocument,
} from '../../gql/graphql';

const url = process.env.NX_GRAPHQL_ENDPOINT || 'http://localhost:3000/graphql';

type AuthHeaderProps = {
  authorization?: string;
};
const gqlClient = new GraphQLClient(url, {
  headers: () => {
    const authHeaders = {} as AuthHeaderProps;
    const token = Cookies.get('access_token');

    if (token) {
      authHeaders['authorization'] = `Bearer ${token}`;
    }
    return {
      'Content-Type': 'application/json',
      ...authHeaders,
    };
  },
});
//@ts-ignore
//window.GQL_CLIENT = gqlClient;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});
//@ts-ignore
//window.REACT_QUERY_CLIENT = queryClient;

const context = React.createContext<QueryClient>(queryClient);
//@ts-ignore
//window.REACT_QUERY_CONTEXT = context;

const login = (queryLoginArgs: QueryLoginArgs, onSuccess?: () => void) => {
  gqlClient
    .request(LoginDocument, queryLoginArgs)
    .then(async (res: any) => {
      Cookies.set('access_token', res.login.access_token, { secure: true });
      whoAmI();
      onSuccess && onSuccess();
    })
    .catch(() => {
      Cookies.remove('access_token');
    });
};

const logout = (onSuccess?: () => void) => {
  globalStore.setAuth(null);
  Cookies.remove('access_token');
  onSuccess && onSuccess();
};

const whoAmI = () => {
  gqlClient
    .request(WhoAmIDocument)
    .then((res) => {
      globalStore.setAuth(res.whoAmI);
      console.log('whoami response: ', res);
    })
    .catch((err) => {
      globalStore.setAuth(null);
      console.log('whoami request error: ', err);
    });
};

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    whoAmI();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export {
  login,
  logout,
  whoAmI,
  DataProvider,
  queryClient,
  QueryClientProvider,
  gqlClient,
  useQuery,
  useMutation
};
