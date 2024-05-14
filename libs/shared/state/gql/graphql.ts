/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Auth = {
  __typename?: 'Auth';
  access_token: Scalars['String']['output'];
};

export type CreateIsaInput = {
  isaOptionId: Scalars['String']['input'];
  savings: Scalars['Float']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type Isa = {
  __typename?: 'Isa';
  isaOptionId: Scalars['String']['output'];
  savings: Scalars['Float']['output'];
  userId: Scalars['String']['output'];
};

export type IsaOption = {
  __typename?: 'IsaOption';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createIsa: Isa;
  createUser: User;
  deleteMyIsa: Isa;
  deleteUserById: User;
  updateUserById: User;
};


export type MutationCreateIsaArgs = {
  createIsaInput: CreateIsaInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateUserByIdArgs = {
  updateUserInput: UpdateUserInput;
};

export type Pension = {
  __typename?: 'Pension';
  employer: Scalars['String']['output'];
  savings: Scalars['Float']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllIsaOptions: Array<IsaOption>;
  getAllUsers: Array<User>;
  getIsaOptionById: IsaOption;
  getMyIsa?: Maybe<Isa>;
  getMyPension?: Maybe<Pension>;
  getUserById: User;
  login: Auth;
  whoAmI: User;
};


export type QueryGetIsaOptionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  pension?: Maybe<Pension>;
};

export type CreateIsaMutationVariables = Exact<{
  createIsaInput: CreateIsaInput;
}>;


export type CreateIsaMutation = { __typename?: 'Mutation', createIsa: { __typename?: 'Isa', userId: string, savings: number, isaOptionId: string } };

export type DeleteMyIsaMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteMyIsaMutation = { __typename?: 'Mutation', deleteMyIsa: { __typename?: 'Isa', userId: string, savings: number, isaOptionId: string } };

export type GetAllIsaOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllIsaOptionsQuery = { __typename?: 'Query', getAllIsaOptions: Array<{ __typename?: 'IsaOption', id: string, name: string }> };

export type GetMyIsaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyIsaQuery = { __typename?: 'Query', getMyIsa?: { __typename?: 'Isa', savings: number, isaOptionId: string } | null };

export type GetMyPensionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPensionQuery = { __typename?: 'Query', getMyPension?: { __typename?: 'Pension', employer: string, savings: number } | null };

export type LoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'Auth', access_token: string } };

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoAmI: { __typename?: 'User', id: string, fullName: string, email: string } };


export const CreateIsaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createIsa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createIsaInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateIsaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIsa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createIsaInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createIsaInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"savings"}},{"kind":"Field","name":{"kind":"Name","value":"isaOptionId"}}]}}]}}]} as unknown as DocumentNode<CreateIsaMutation, CreateIsaMutationVariables>;
export const DeleteMyIsaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteMyIsa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMyIsa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"savings"}},{"kind":"Field","name":{"kind":"Name","value":"isaOptionId"}}]}}]}}]} as unknown as DocumentNode<DeleteMyIsaMutation, DeleteMyIsaMutationVariables>;
export const GetAllIsaOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllIsaOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllIsaOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllIsaOptionsQuery, GetAllIsaOptionsQueryVariables>;
export const GetMyIsaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMyIsa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyIsa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"savings"}},{"kind":"Field","name":{"kind":"Name","value":"isaOptionId"}}]}}]}}]} as unknown as DocumentNode<GetMyIsaQuery, GetMyIsaQueryVariables>;
export const GetMyPensionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMyPension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyPension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employer"}},{"kind":"Field","name":{"kind":"Name","value":"savings"}}]}}]}}]} as unknown as DocumentNode<GetMyPensionQuery, GetMyPensionQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const WhoAmIDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"whoAmI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoAmI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<WhoAmIQuery, WhoAmIQueryVariables>;