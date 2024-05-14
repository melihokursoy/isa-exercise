import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { globalStore } from './store';
import {
  CreateIsaDocument,
  CreateIsaInput,
  DeleteMyIsaDocument,
  GetAllIsaOptionsDocument,
  GetMyIsaDocument,
  GetMyPensionDocument,
  Isa,
  IsaOption,
  LoginDocument,
  MutationCreateIsaArgs,
  Pension,
  QueryLoginArgs,
  WhoAmIDocument,
} from '../../gql/graphql';

const url = process.env.NX_GRAPHQL_ENDPOINT || 'http://localhost:3000/graphql';

type AuthHeaderProps = {
  authorization?: string;
};
export const gqlClient = new GraphQLClient(url, {
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

export const queryClient = new QueryClient({
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

export const login = (
  queryLoginArgs: QueryLoginArgs,
  onSuccess?: () => void
) => {
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

export const logout = (onSuccess?: () => void) => {
  globalStore.setAuth(null);
  Cookies.remove('access_token');
  onSuccess && onSuccess();
};

export const whoAmI = () => {
  gqlClient
    .request(WhoAmIDocument)
    .then((res) => {
      globalStore.setAuth(res.whoAmI);
    })
    .catch((err) => {
      globalStore.setAuth(null);
      console.log('WhoAmIDocument request error: ', err.message);
    });
};

export const getMyPensions = () => {
  gqlClient
    .request(GetMyPensionDocument)
    .then((res) => {
      globalStore.setMyPension(res.getMyPension as Pension);
    })
    .catch((err) => {
      console.log('GetMyPensionDocument request error: ', err.message);
    });
};

export const getMyIsa = () => {
  gqlClient
    .request(GetMyIsaDocument)
    .then((res) => {
      globalStore.setMyISA(res.getMyIsa as Isa);
    })
    .catch((err) => {
      console.log('GetMyIsaDocument request error: ', err.message);
    });
};

export const getAllIsaOptions = () => {
  gqlClient
    .request(GetAllIsaOptionsDocument)
    .then((res) => {
      globalStore.setIsaOptions(res.getAllIsaOptions as IsaOption[]);
    })
    .catch((err) => {
      console.log('GetAllIsaOptionsDocument request error: ', err.message);
    });
};

export const createIsa = (createIsaArgs: MutationCreateIsaArgs) => {
  gqlClient
    .request(CreateIsaDocument, createIsaArgs)
    .then((res) => {
      globalStore.setMyISA(res.createIsa as Isa);
    })
    .catch((err) => {
      console.log('CreateIsaDocument request error: ', err.message);
    });
};

export const deleteMyIsa = () => {
  gqlClient
    .request(DeleteMyIsaDocument)
    .then((res) => {
      globalStore.setMyISA(null);
    })
    .catch((err) => {
      console.log('DeleteMyIsaDocument request error: ', err.message);
    });
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    whoAmI();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { QueryClientProvider, useQuery, useMutation };
