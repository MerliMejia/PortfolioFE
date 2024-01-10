import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type CreateCustomOfferInput = {
  description: Scalars['String']['input'];
  isPercentage: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
  value: Scalars['Float']['input'];
};

export type CreateLeadInputType = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  itemId: Scalars['Int']['input'];
  lastName: Scalars['String']['input'];
  listId: Scalars['Int']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type CreateUserMutation = {
  __typename?: 'CreateUserMutation';
  user?: Maybe<UserType>;
};

export type CustomOfferType = {
  __typename?: 'CustomOfferType';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isPercentage: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  user: UserType;
  value: Scalars['Float']['output'];
};

export type ForgotPasswordMutation = {
  __typename?: 'ForgotPasswordMutation';
  email?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type LeadType = {
  __typename?: 'LeadType';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  item?: Maybe<ListItemType>;
  lastName: Scalars['String']['output'];
  list?: Maybe<ListType>;
  phoneNumber: Scalars['String']['output'];
};

export type ListItemInputType = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ListItemType = {
  __typename?: 'ListItemType';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ListType = {
  __typename?: 'ListType';
  companyLogo?: Maybe<Scalars['String']['output']>;
  contactInformation?: Maybe<Scalars['String']['output']>;
  customOffers?: Maybe<Array<Maybe<CustomOfferType>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  items?: Maybe<Array<Maybe<ListItemType>>>;
  name: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomOffer?: Maybe<CreateCustomOfferMutation>;
  createForgetPassword?: Maybe<ForgotPasswordMutation>;
  createLead?: Maybe<CreateLeadMutation>;
  createList?: Maybe<CreateListMutation>;
  createUser?: Maybe<CreateUserMutation>;
  deleteCustomOffer?: Maybe<DeleteCustomOfferMutation>;
  deleteListById?: Maybe<DeleteListByIdMutation>;
  deleteListItemById?: Maybe<DeleteListItemByIdMutation>;
  login?: Maybe<LoginMutation>;
  logout?: Maybe<LogoutMutation>;
  updateCustomOffer?: Maybe<UpdateCustomOfferMutation>;
  updateList?: Maybe<UpdateListMutation>;
  verifyForgetPassword?: Maybe<VerifyForgotPasswordMutation>;
};

export type MutationCreateCustomOfferArgs = {
  inputOffer: CreateCustomOfferInput;
};

export type MutationCreateForgetPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationCreateLeadArgs = {
  lead: CreateLeadInputType;
};

export type MutationCreateListArgs = {
  companyLogo?: InputMaybe<Scalars['String']['input']>;
  contactInformation?: InputMaybe<Scalars['String']['input']>;
  customOfferIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<ListItemInputType>>>;
  name: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type MutationCreateUserArgs = {
  userInput?: InputMaybe<UsersInputType>;
};

export type MutationDeleteCustomOfferArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteListByIdArgs = {
  id: Scalars['Int']['input'];
};

export type MutationDeleteListItemByIdArgs = {
  id: Scalars['Int']['input'];
};

export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type MutationUpdateCustomOfferArgs = {
  inputOffer: UpdateCustomOfferInput;
};

export type MutationUpdateListArgs = {
  items?: InputMaybe<Array<InputMaybe<ListItemInputType>>>;
  list: UpdateListType;
};

export type MutationVerifyForgetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Queries = {
  __typename?: 'Queries';
  checkAuth?: Maybe<UserType>;
  customOfferById?: Maybe<CustomOfferType>;
  customOfferByListId?: Maybe<Array<Maybe<CustomOfferType>>>;
  customOfferByUserId?: Maybe<Array<Maybe<CustomOfferType>>>;
  leadsByUserId?: Maybe<Array<Maybe<LeadType>>>;
  listById?: Maybe<ListType>;
  listsByUserId?: Maybe<Array<Maybe<ListType>>>;
  users?: Maybe<Array<Maybe<UserType>>>;
};

export type QueriesCustomOfferByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueriesCustomOfferByListIdArgs = {
  listId: Scalars['Int']['input'];
};

export type QueriesCustomOfferByUserIdArgs = {
  userId: Scalars['Int']['input'];
};

export type QueriesLeadsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};

export type QueriesListByIdArgs = {
  id: Scalars['Int']['input'];
};

export type QueriesListsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};

export type UpdateCustomOfferInput = {
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  isPercentage: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type UpdateListType = {
  companyLogo?: InputMaybe<Scalars['String']['input']>;
  contactInformation?: InputMaybe<Scalars['String']['input']>;
  customOfferIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  items?: InputMaybe<Array<InputMaybe<ListItemInputType>>>;
  name: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type UserType = {
  __typename?: 'UserType';
  customOffer: Array<CustomOfferType>;
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  type?: Maybe<UserUsersTypeChoices>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
};

/** An enumeration. */
export enum UserUsersTypeChoices {
  /** Admin */
  Admin = 'ADMIN',
}

export type UsersInputType = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyForgotPasswordMutation = {
  __typename?: 'VerifyForgotPasswordMutation';
  password?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type CustomOfferTypeFragmentFragment = {
  __typename?: 'CustomOfferType';
  description: string;
  id: string;
  isPercentage: boolean;
  name: string;
  value: number;
  user: {
    __typename?: 'UserType';
    email: string;
    firstName: string;
    id: string;
    isActive: boolean;
    lastName: string;
    type?: UserUsersTypeChoices | null;
    username: string;
  };
};

export type CustomOfferByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;

export type CustomOfferByIdQuery = {
  __typename?: 'Queries';
  customOfferById?: {
    __typename?: 'CustomOfferType';
    description: string;
    id: string;
    isPercentage: boolean;
    name: string;
    value: number;
    user: {
      __typename?: 'UserType';
      email: string;
      firstName: string;
      id: string;
      isActive: boolean;
      lastName: string;
      type?: UserUsersTypeChoices | null;
      username: string;
    };
  } | null;
};

export type CustomOfferByListIdQueryVariables = Exact<{
  listId: Scalars['Int']['input'];
}>;

export type CustomOfferByListIdQuery = {
  __typename?: 'Queries';
  customOfferByListId?: Array<{
    __typename?: 'CustomOfferType';
    description: string;
    id: string;
    isPercentage: boolean;
    name: string;
    value: number;
    user: {
      __typename?: 'UserType';
      email: string;
      firstName: string;
      id: string;
      isActive: boolean;
      lastName: string;
      type?: UserUsersTypeChoices | null;
      username: string;
    };
  } | null> | null;
};

export type CustomOfferByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;

export type CustomOfferByUserIdQuery = {
  __typename?: 'Queries';
  customOfferByUserId?: Array<{
    __typename?: 'CustomOfferType';
    description: string;
    id: string;
    isPercentage: boolean;
    name: string;
    value: number;
    user: {
      __typename?: 'UserType';
      email: string;
      firstName: string;
      id: string;
      isActive: boolean;
      lastName: string;
      type?: UserUsersTypeChoices | null;
      username: string;
    };
  } | null> | null;
};

export type CreateCustomOfferMutationVariables = Exact<{
  inputOffer: CreateCustomOfferInput;
}>;

export type CreateCustomOfferMutation = {
  __typename?: 'Mutation';
  createCustomOffer?: {
    __typename?: 'CreateCustomOfferMutation';
    customOffer?: {
      __typename?: 'CustomOfferType';
      description: string;
      id: string;
      isPercentage: boolean;
      name: string;
      value: number;
      user: {
        __typename?: 'UserType';
        email: string;
        firstName: string;
        id: string;
        isActive: boolean;
        lastName: string;
        type?: UserUsersTypeChoices | null;
        username: string;
      };
    } | null;
  } | null;
};

export type DeleteCustomOfferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteCustomOfferMutation = {
  __typename?: 'Mutation';
  deleteCustomOffer?: {
    __typename?: 'DeleteCustomOfferMutation';
    ok?: boolean | null;
  } | null;
};

export type UpdateCustomOfferMutationVariables = Exact<{
  inputOffer: UpdateCustomOfferInput;
}>;

export type UpdateCustomOfferMutation = {
  __typename?: 'Mutation';
  updateCustomOffer?: {
    __typename?: 'UpdateCustomOfferMutation';
    customOffer?: {
      __typename?: 'CustomOfferType';
      description: string;
      id: string;
      isPercentage: boolean;
      name: string;
      value: number;
      user: {
        __typename?: 'UserType';
        email: string;
        firstName: string;
        id: string;
        isActive: boolean;
        lastName: string;
        type?: UserUsersTypeChoices | null;
        username: string;
      };
    } | null;
  } | null;
};

export type CreateForgetPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;

export type CreateForgetPasswordMutation = {
  __typename?: 'Mutation';
  createForgetPassword?: {
    __typename?: 'ForgotPasswordMutation';
    token?: string | null;
  } | null;
};

export type VerifyForgetPasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;

export type VerifyForgetPasswordMutation = {
  __typename?: 'Mutation';
  verifyForgetPassword?: {
    __typename?: 'VerifyForgotPasswordMutation';
    password?: string | null;
    token?: string | null;
  } | null;
};

export type CreateListMutationVariables = Exact<{
  items?: InputMaybe<
    Array<InputMaybe<ListItemInputType>> | InputMaybe<ListItemInputType>
  >;
  name: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
  customOfferIds?: InputMaybe<
    | Array<InputMaybe<Scalars['Int']['input']>>
    | InputMaybe<Scalars['Int']['input']>
  >;
  companyLogo?: InputMaybe<Scalars['String']['input']>;
  contactInformation?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateListMutation = {
  __typename?: 'Mutation';
  createList?: {
    __typename?: 'CreateListMutation';
    list?: {
      __typename?: 'ListType';
      id: number;
      name: string;
      userId: number;
      companyLogo?: string | null;
      contactInformation?: string | null;
      description?: string | null;
      items?: Array<{
        __typename?: 'ListItemType';
        email: string;
        id: string;
        name: string;
      } | null> | null;
    } | null;
  } | null;
};

export type ListsByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;

export type ListsByUserIdQuery = {
  __typename?: 'Queries';
  listsByUserId?: Array<{
    __typename?: 'ListType';
    id: number;
    name: string;
    userId: number;
    companyLogo?: string | null;
    contactInformation?: string | null;
    description?: string | null;
    items?: Array<{
      __typename?: 'ListItemType';
      email: string;
      id: string;
      name: string;
    } | null> | null;
    customOffers?: Array<{
      __typename?: 'CustomOfferType';
      description: string;
      id: string;
      isPercentage: boolean;
      name: string;
      value: number;
      user: {
        __typename?: 'UserType';
        email: string;
        firstName: string;
        id: string;
        isActive: boolean;
        lastName: string;
        type?: UserUsersTypeChoices | null;
        username: string;
      };
    } | null> | null;
  } | null> | null;
};

export type DeleteListByIdMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DeleteListByIdMutation = {
  __typename?: 'Mutation';
  deleteListById?: {
    __typename?: 'DeleteListByIdMutation';
    ok?: boolean | null;
  } | null;
};

export type DeleteListItemByIdMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DeleteListItemByIdMutation = {
  __typename?: 'Mutation';
  deleteListItemById?: {
    __typename?: 'DeleteListItemByIdMutation';
    ok?: boolean | null;
  } | null;
};

export type UpdateListMutationVariables = Exact<{
  list: UpdateListType;
  items?: InputMaybe<
    Array<InputMaybe<ListItemInputType>> | InputMaybe<ListItemInputType>
  >;
}>;

export type UpdateListMutation = {
  __typename?: 'Mutation';
  updateList?: {
    __typename?: 'UpdateListMutation';
    list?: {
      __typename?: 'ListType';
      id: number;
      name: string;
      userId: number;
      companyLogo?: string | null;
      contactInformation?: string | null;
      description?: string | null;
      items?: Array<{
        __typename?: 'ListItemType';
        email: string;
        id: string;
        name: string;
      } | null> | null;
    } | null;
  } | null;
};

export type ListByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type ListByIdQuery = {
  __typename?: 'Queries';
  listById?: {
    __typename?: 'ListType';
    id: number;
    name: string;
    userId: number;
    companyLogo?: string | null;
    contactInformation?: string | null;
    description?: string | null;
    items?: Array<{
      __typename?: 'ListItemType';
      email: string;
      id: string;
      name: string;
    } | null> | null;
  } | null;
};

export type CreateLeadMutationVariables = Exact<{
  lead: CreateLeadInputType;
}>;

export type CreateLeadMutation = {
  __typename?: 'Mutation';
  createLead?: {
    __typename?: 'CreateLeadMutation';
    lead?: {
      __typename?: 'LeadType';
      email: string;
      firstName: string;
      id: number;
      lastName: string;
      phoneNumber: string;
    } | null;
  } | null;
};

export type LeadsByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;

export type LeadsByUserIdQuery = {
  __typename?: 'Queries';
  leadsByUserId?: Array<{
    __typename?: 'LeadType';
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    phoneNumber: string;
    item?: {
      __typename?: 'ListItemType';
      name: string;
      email: string;
      id: string;
    } | null;
    list?: {
      __typename?: 'ListType';
      id: number;
      name: string;
      customOffers?: Array<{
        __typename?: 'CustomOfferType';
        id: string;
        description: string;
        name: string;
        isPercentage: boolean;
        value: number;
      } | null> | null;
    } | null;
  } | null> | null;
};

export type LoginMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: {
    __typename?: 'LoginMutation';
    token?: string | null;
    user?: {
      __typename?: 'UserType';
      email: string;
      firstName: string;
      id: string;
      isActive: boolean;
      lastName: string;
      type?: UserUsersTypeChoices | null;
      username: string;
    } | null;
  } | null;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
  __typename?: 'Mutation';
  logout?: {
    __typename?: 'LogoutMutation';
    user?: {
      __typename?: 'UserType';
      email: string;
      firstName: string;
      id: string;
      isActive: boolean;
      lastName: string;
      type?: UserUsersTypeChoices | null;
      username: string;
    } | null;
  } | null;
};

export type UserFragmentFragment = {
  __typename?: 'UserType';
  email: string;
  firstName: string;
  id: string;
  isActive: boolean;
  lastName: string;
  type?: UserUsersTypeChoices | null;
  username: string;
};

export type CheckAuthQueryVariables = Exact<{ [key: string]: never }>;

export type CheckAuthQuery = {
  __typename?: 'Queries';
  checkAuth?: {
    __typename?: 'UserType';
    email: string;
    firstName: string;
    id: string;
    isActive: boolean;
    lastName: string;
    type?: UserUsersTypeChoices | null;
    username: string;
  } | null;
};

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on UserType {
    email
    firstName
    id
    isActive
    lastName
    type
    username
  }
`;
export const CustomOfferTypeFragmentFragmentDoc = gql`
  fragment CustomOfferTypeFragment on CustomOfferType {
    description
    id
    isPercentage
    name
    value
    user {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export const CustomOfferByIdDocument = gql`
  query customOfferById($id: ID = "") {
    customOfferById(id: $id) {
      ...CustomOfferTypeFragment
    }
  }
  ${CustomOfferTypeFragmentFragmentDoc}
`;

/**
 * __useCustomOfferByIdQuery__
 *
 * To run a query within a React component, call `useCustomOfferByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomOfferByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomOfferByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomOfferByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CustomOfferByIdQuery,
    CustomOfferByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CustomOfferByIdQuery, CustomOfferByIdQueryVariables>(
    CustomOfferByIdDocument,
    options,
  );
}
export function useCustomOfferByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomOfferByIdQuery,
    CustomOfferByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomOfferByIdQuery,
    CustomOfferByIdQueryVariables
  >(CustomOfferByIdDocument, options);
}
export function useCustomOfferByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CustomOfferByIdQuery,
    CustomOfferByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    CustomOfferByIdQuery,
    CustomOfferByIdQueryVariables
  >(CustomOfferByIdDocument, options);
}
export type CustomOfferByIdQueryHookResult = ReturnType<
  typeof useCustomOfferByIdQuery
>;
export type CustomOfferByIdLazyQueryHookResult = ReturnType<
  typeof useCustomOfferByIdLazyQuery
>;
export type CustomOfferByIdSuspenseQueryHookResult = ReturnType<
  typeof useCustomOfferByIdSuspenseQuery
>;
export type CustomOfferByIdQueryResult = Apollo.QueryResult<
  CustomOfferByIdQuery,
  CustomOfferByIdQueryVariables
>;
export const CustomOfferByListIdDocument = gql`
  query customOfferByListId($listId: Int!) {
    customOfferByListId(listId: $listId) {
      ...CustomOfferTypeFragment
    }
  }
  ${CustomOfferTypeFragmentFragmentDoc}
`;

/**
 * __useCustomOfferByListIdQuery__
 *
 * To run a query within a React component, call `useCustomOfferByListIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomOfferByListIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomOfferByListIdQuery({
 *   variables: {
 *      listId: // value for 'listId'
 *   },
 * });
 */
export function useCustomOfferByListIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    CustomOfferByListIdQuery,
    CustomOfferByListIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CustomOfferByListIdQuery,
    CustomOfferByListIdQueryVariables
  >(CustomOfferByListIdDocument, options);
}
export function useCustomOfferByListIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomOfferByListIdQuery,
    CustomOfferByListIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomOfferByListIdQuery,
    CustomOfferByListIdQueryVariables
  >(CustomOfferByListIdDocument, options);
}
export function useCustomOfferByListIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CustomOfferByListIdQuery,
    CustomOfferByListIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    CustomOfferByListIdQuery,
    CustomOfferByListIdQueryVariables
  >(CustomOfferByListIdDocument, options);
}
export type CustomOfferByListIdQueryHookResult = ReturnType<
  typeof useCustomOfferByListIdQuery
>;
export type CustomOfferByListIdLazyQueryHookResult = ReturnType<
  typeof useCustomOfferByListIdLazyQuery
>;
export type CustomOfferByListIdSuspenseQueryHookResult = ReturnType<
  typeof useCustomOfferByListIdSuspenseQuery
>;
export type CustomOfferByListIdQueryResult = Apollo.QueryResult<
  CustomOfferByListIdQuery,
  CustomOfferByListIdQueryVariables
>;
export const CustomOfferByUserIdDocument = gql`
  query customOfferByUserId($userId: Int!) {
    customOfferByUserId(userId: $userId) {
      ...CustomOfferTypeFragment
    }
  }
  ${CustomOfferTypeFragmentFragmentDoc}
`;

/**
 * __useCustomOfferByUserIdQuery__
 *
 * To run a query within a React component, call `useCustomOfferByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomOfferByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomOfferByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCustomOfferByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    CustomOfferByUserIdQuery,
    CustomOfferByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CustomOfferByUserIdQuery,
    CustomOfferByUserIdQueryVariables
  >(CustomOfferByUserIdDocument, options);
}
export function useCustomOfferByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomOfferByUserIdQuery,
    CustomOfferByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomOfferByUserIdQuery,
    CustomOfferByUserIdQueryVariables
  >(CustomOfferByUserIdDocument, options);
}
export function useCustomOfferByUserIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CustomOfferByUserIdQuery,
    CustomOfferByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    CustomOfferByUserIdQuery,
    CustomOfferByUserIdQueryVariables
  >(CustomOfferByUserIdDocument, options);
}
export type CustomOfferByUserIdQueryHookResult = ReturnType<
  typeof useCustomOfferByUserIdQuery
>;
export type CustomOfferByUserIdLazyQueryHookResult = ReturnType<
  typeof useCustomOfferByUserIdLazyQuery
>;
export type CustomOfferByUserIdSuspenseQueryHookResult = ReturnType<
  typeof useCustomOfferByUserIdSuspenseQuery
>;
export type CustomOfferByUserIdQueryResult = Apollo.QueryResult<
  CustomOfferByUserIdQuery,
  CustomOfferByUserIdQueryVariables
>;
export const CreateCustomOfferDocument = gql`
  mutation createCustomOffer($inputOffer: CreateCustomOfferInput!) {
    createCustomOffer(inputOffer: $inputOffer) {
      customOffer {
        ...CustomOfferTypeFragment
      }
    }
  }
  ${CustomOfferTypeFragmentFragmentDoc}
`;
export type CreateCustomOfferMutationFn = Apollo.MutationFunction<
  CreateCustomOfferMutation,
  CreateCustomOfferMutationVariables
>;

/**
 * __useCreateCustomOfferMutation__
 *
 * To run a mutation, you first call `useCreateCustomOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomOfferMutation, { data, loading, error }] = useCreateCustomOfferMutation({
 *   variables: {
 *      inputOffer: // value for 'inputOffer'
 *   },
 * });
 */
export function useCreateCustomOfferMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomOfferMutation,
    CreateCustomOfferMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCustomOfferMutation,
    CreateCustomOfferMutationVariables
  >(CreateCustomOfferDocument, options);
}
export type CreateCustomOfferMutationHookResult = ReturnType<
  typeof useCreateCustomOfferMutation
>;
export type CreateCustomOfferMutationResult =
  Apollo.MutationResult<CreateCustomOfferMutation>;
export type CreateCustomOfferMutationOptions = Apollo.BaseMutationOptions<
  CreateCustomOfferMutation,
  CreateCustomOfferMutationVariables
>;
export const DeleteCustomOfferDocument = gql`
  mutation deleteCustomOffer($id: ID!) {
    deleteCustomOffer(id: $id) {
      ok
    }
  }
`;
export type DeleteCustomOfferMutationFn = Apollo.MutationFunction<
  DeleteCustomOfferMutation,
  DeleteCustomOfferMutationVariables
>;

/**
 * __useDeleteCustomOfferMutation__
 *
 * To run a mutation, you first call `useDeleteCustomOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomOfferMutation, { data, loading, error }] = useDeleteCustomOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomOfferMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCustomOfferMutation,
    DeleteCustomOfferMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCustomOfferMutation,
    DeleteCustomOfferMutationVariables
  >(DeleteCustomOfferDocument, options);
}
export type DeleteCustomOfferMutationHookResult = ReturnType<
  typeof useDeleteCustomOfferMutation
>;
export type DeleteCustomOfferMutationResult =
  Apollo.MutationResult<DeleteCustomOfferMutation>;
export type DeleteCustomOfferMutationOptions = Apollo.BaseMutationOptions<
  DeleteCustomOfferMutation,
  DeleteCustomOfferMutationVariables
>;
export const UpdateCustomOfferDocument = gql`
  mutation updateCustomOffer($inputOffer: UpdateCustomOfferInput!) {
    updateCustomOffer(inputOffer: $inputOffer) {
      customOffer {
        ...CustomOfferTypeFragment
      }
    }
  }
  ${CustomOfferTypeFragmentFragmentDoc}
`;
export type UpdateCustomOfferMutationFn = Apollo.MutationFunction<
  UpdateCustomOfferMutation,
  UpdateCustomOfferMutationVariables
>;

/**
 * __useUpdateCustomOfferMutation__
 *
 * To run a mutation, you first call `useUpdateCustomOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomOfferMutation, { data, loading, error }] = useUpdateCustomOfferMutation({
 *   variables: {
 *      inputOffer: // value for 'inputOffer'
 *   },
 * });
 */
export function useUpdateCustomOfferMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomOfferMutation,
    UpdateCustomOfferMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomOfferMutation,
    UpdateCustomOfferMutationVariables
  >(UpdateCustomOfferDocument, options);
}
export type UpdateCustomOfferMutationHookResult = ReturnType<
  typeof useUpdateCustomOfferMutation
>;
export type UpdateCustomOfferMutationResult =
  Apollo.MutationResult<UpdateCustomOfferMutation>;
export type UpdateCustomOfferMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomOfferMutation,
  UpdateCustomOfferMutationVariables
>;
export const CreateForgetPasswordDocument = gql`
  mutation createForgetPassword($email: String!) {
    createForgetPassword(email: $email) {
      token
    }
  }
`;
export type CreateForgetPasswordMutationFn = Apollo.MutationFunction<
  CreateForgetPasswordMutation,
  CreateForgetPasswordMutationVariables
>;

/**
 * __useCreateForgetPasswordMutation__
 *
 * To run a mutation, you first call `useCreateForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createForgetPasswordMutation, { data, loading, error }] = useCreateForgetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateForgetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateForgetPasswordMutation,
    CreateForgetPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateForgetPasswordMutation,
    CreateForgetPasswordMutationVariables
  >(CreateForgetPasswordDocument, options);
}
export type CreateForgetPasswordMutationHookResult = ReturnType<
  typeof useCreateForgetPasswordMutation
>;
export type CreateForgetPasswordMutationResult =
  Apollo.MutationResult<CreateForgetPasswordMutation>;
export type CreateForgetPasswordMutationOptions = Apollo.BaseMutationOptions<
  CreateForgetPasswordMutation,
  CreateForgetPasswordMutationVariables
>;
export const VerifyForgetPasswordDocument = gql`
  mutation verifyForgetPassword($password: String!, $token: String!) {
    verifyForgetPassword(password: $password, token: $token) {
      password
      token
    }
  }
`;
export type VerifyForgetPasswordMutationFn = Apollo.MutationFunction<
  VerifyForgetPasswordMutation,
  VerifyForgetPasswordMutationVariables
>;

/**
 * __useVerifyForgetPasswordMutation__
 *
 * To run a mutation, you first call `useVerifyForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyForgetPasswordMutation, { data, loading, error }] = useVerifyForgetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyForgetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyForgetPasswordMutation,
    VerifyForgetPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    VerifyForgetPasswordMutation,
    VerifyForgetPasswordMutationVariables
  >(VerifyForgetPasswordDocument, options);
}
export type VerifyForgetPasswordMutationHookResult = ReturnType<
  typeof useVerifyForgetPasswordMutation
>;
export type VerifyForgetPasswordMutationResult =
  Apollo.MutationResult<VerifyForgetPasswordMutation>;
export type VerifyForgetPasswordMutationOptions = Apollo.BaseMutationOptions<
  VerifyForgetPasswordMutation,
  VerifyForgetPasswordMutationVariables
>;
export const CreateListDocument = gql`
  mutation CreateList(
    $items: [ListItemInputType]
    $name: String!
    $userId: Int!
    $customOfferIds: [Int]
    $companyLogo: String
    $contactInformation: String
    $description: String
  ) {
    createList(
      name: $name
      userId: $userId
      items: $items
      customOfferIds: $customOfferIds
      companyLogo: $companyLogo
      contactInformation: $contactInformation
      description: $description
    ) {
      list {
        id
        items {
          email
          id
          name
        }
        name
        userId
        companyLogo
        contactInformation
        description
      }
    }
  }
`;
export type CreateListMutationFn = Apollo.MutationFunction<
  CreateListMutation,
  CreateListMutationVariables
>;

/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      items: // value for 'items'
 *      name: // value for 'name'
 *      userId: // value for 'userId'
 *      customOfferIds: // value for 'customOfferIds'
 *      companyLogo: // value for 'companyLogo'
 *      contactInformation: // value for 'contactInformation'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateListMutation,
    CreateListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(
    CreateListDocument,
    options,
  );
}
export type CreateListMutationHookResult = ReturnType<
  typeof useCreateListMutation
>;
export type CreateListMutationResult =
  Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<
  CreateListMutation,
  CreateListMutationVariables
>;
export const ListsByUserIdDocument = gql`
  query listsByUserId($userId: Int!) {
    listsByUserId(userId: $userId) {
      id
      name
      userId
      items {
        email
        id
        name
      }
      customOffers {
        ...CustomOfferTypeFragment
      }
      companyLogo
      contactInformation
      description
    }
  }
  ${CustomOfferTypeFragmentFragmentDoc}
`;

/**
 * __useListsByUserIdQuery__
 *
 * To run a query within a React component, call `useListsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useListsByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListsByUserIdQuery,
    ListsByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListsByUserIdQuery, ListsByUserIdQueryVariables>(
    ListsByUserIdDocument,
    options,
  );
}
export function useListsByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListsByUserIdQuery,
    ListsByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ListsByUserIdQuery, ListsByUserIdQueryVariables>(
    ListsByUserIdDocument,
    options,
  );
}
export function useListsByUserIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ListsByUserIdQuery,
    ListsByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ListsByUserIdQuery,
    ListsByUserIdQueryVariables
  >(ListsByUserIdDocument, options);
}
export type ListsByUserIdQueryHookResult = ReturnType<
  typeof useListsByUserIdQuery
>;
export type ListsByUserIdLazyQueryHookResult = ReturnType<
  typeof useListsByUserIdLazyQuery
>;
export type ListsByUserIdSuspenseQueryHookResult = ReturnType<
  typeof useListsByUserIdSuspenseQuery
>;
export type ListsByUserIdQueryResult = Apollo.QueryResult<
  ListsByUserIdQuery,
  ListsByUserIdQueryVariables
>;
export const DeleteListByIdDocument = gql`
  mutation deleteListById($id: Int!) {
    deleteListById(id: $id) {
      ok
    }
  }
`;
export type DeleteListByIdMutationFn = Apollo.MutationFunction<
  DeleteListByIdMutation,
  DeleteListByIdMutationVariables
>;

/**
 * __useDeleteListByIdMutation__
 *
 * To run a mutation, you first call `useDeleteListByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListByIdMutation, { data, loading, error }] = useDeleteListByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteListByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteListByIdMutation,
    DeleteListByIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteListByIdMutation,
    DeleteListByIdMutationVariables
  >(DeleteListByIdDocument, options);
}
export type DeleteListByIdMutationHookResult = ReturnType<
  typeof useDeleteListByIdMutation
>;
export type DeleteListByIdMutationResult =
  Apollo.MutationResult<DeleteListByIdMutation>;
export type DeleteListByIdMutationOptions = Apollo.BaseMutationOptions<
  DeleteListByIdMutation,
  DeleteListByIdMutationVariables
>;
export const DeleteListItemByIdDocument = gql`
  mutation deleteListItemById($id: Int!) {
    deleteListItemById(id: $id) {
      ok
    }
  }
`;
export type DeleteListItemByIdMutationFn = Apollo.MutationFunction<
  DeleteListItemByIdMutation,
  DeleteListItemByIdMutationVariables
>;

/**
 * __useDeleteListItemByIdMutation__
 *
 * To run a mutation, you first call `useDeleteListItemByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListItemByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListItemByIdMutation, { data, loading, error }] = useDeleteListItemByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteListItemByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteListItemByIdMutation,
    DeleteListItemByIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteListItemByIdMutation,
    DeleteListItemByIdMutationVariables
  >(DeleteListItemByIdDocument, options);
}
export type DeleteListItemByIdMutationHookResult = ReturnType<
  typeof useDeleteListItemByIdMutation
>;
export type DeleteListItemByIdMutationResult =
  Apollo.MutationResult<DeleteListItemByIdMutation>;
export type DeleteListItemByIdMutationOptions = Apollo.BaseMutationOptions<
  DeleteListItemByIdMutation,
  DeleteListItemByIdMutationVariables
>;
export const UpdateListDocument = gql`
  mutation updateList($list: UpdateListType!, $items: [ListItemInputType]) {
    updateList(list: $list, items: $items) {
      list {
        id
        items {
          email
          id
          name
        }
        name
        userId
        companyLogo
        contactInformation
        description
      }
    }
  }
`;
export type UpdateListMutationFn = Apollo.MutationFunction<
  UpdateListMutation,
  UpdateListMutationVariables
>;

/**
 * __useUpdateListMutation__
 *
 * To run a mutation, you first call `useUpdateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListMutation, { data, loading, error }] = useUpdateListMutation({
 *   variables: {
 *      list: // value for 'list'
 *      items: // value for 'items'
 *   },
 * });
 */
export function useUpdateListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateListMutation,
    UpdateListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateListMutation, UpdateListMutationVariables>(
    UpdateListDocument,
    options,
  );
}
export type UpdateListMutationHookResult = ReturnType<
  typeof useUpdateListMutation
>;
export type UpdateListMutationResult =
  Apollo.MutationResult<UpdateListMutation>;
export type UpdateListMutationOptions = Apollo.BaseMutationOptions<
  UpdateListMutation,
  UpdateListMutationVariables
>;
export const ListByIdDocument = gql`
  query listById($id: Int!) {
    listById(id: $id) {
      id
      name
      items {
        email
        id
        name
      }
      userId
      companyLogo
      contactInformation
      description
    }
  }
`;

/**
 * __useListByIdQuery__
 *
 * To run a query within a React component, call `useListByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useListByIdQuery(
  baseOptions: Apollo.QueryHookOptions<ListByIdQuery, ListByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListByIdQuery, ListByIdQueryVariables>(
    ListByIdDocument,
    options,
  );
}
export function useListByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListByIdQuery,
    ListByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ListByIdQuery, ListByIdQueryVariables>(
    ListByIdDocument,
    options,
  );
}
export function useListByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ListByIdQuery,
    ListByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ListByIdQuery, ListByIdQueryVariables>(
    ListByIdDocument,
    options,
  );
}
export type ListByIdQueryHookResult = ReturnType<typeof useListByIdQuery>;
export type ListByIdLazyQueryHookResult = ReturnType<
  typeof useListByIdLazyQuery
>;
export type ListByIdSuspenseQueryHookResult = ReturnType<
  typeof useListByIdSuspenseQuery
>;
export type ListByIdQueryResult = Apollo.QueryResult<
  ListByIdQuery,
  ListByIdQueryVariables
>;
export const CreateLeadDocument = gql`
  mutation createLead($lead: CreateLeadInputType!) {
    createLead(lead: $lead) {
      lead {
        email
        firstName
        id
        lastName
        phoneNumber
      }
    }
  }
`;
export type CreateLeadMutationFn = Apollo.MutationFunction<
  CreateLeadMutation,
  CreateLeadMutationVariables
>;

/**
 * __useCreateLeadMutation__
 *
 * To run a mutation, you first call `useCreateLeadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeadMutation, { data, loading, error }] = useCreateLeadMutation({
 *   variables: {
 *      lead: // value for 'lead'
 *   },
 * });
 */
export function useCreateLeadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLeadMutation,
    CreateLeadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateLeadMutation, CreateLeadMutationVariables>(
    CreateLeadDocument,
    options,
  );
}
export type CreateLeadMutationHookResult = ReturnType<
  typeof useCreateLeadMutation
>;
export type CreateLeadMutationResult =
  Apollo.MutationResult<CreateLeadMutation>;
export type CreateLeadMutationOptions = Apollo.BaseMutationOptions<
  CreateLeadMutation,
  CreateLeadMutationVariables
>;
export const LeadsByUserIdDocument = gql`
  query leadsByUserId($userId: Int!) {
    leadsByUserId(userId: $userId) {
      email
      firstName
      id
      lastName
      phoneNumber
      item {
        name
        email
        id
      }
      list {
        id
        customOffers {
          id
          description
          name
          isPercentage
          value
        }
        name
      }
    }
  }
`;

/**
 * __useLeadsByUserIdQuery__
 *
 * To run a query within a React component, call `useLeadsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeadsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeadsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLeadsByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    LeadsByUserIdQuery,
    LeadsByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LeadsByUserIdQuery, LeadsByUserIdQueryVariables>(
    LeadsByUserIdDocument,
    options,
  );
}
export function useLeadsByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LeadsByUserIdQuery,
    LeadsByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LeadsByUserIdQuery, LeadsByUserIdQueryVariables>(
    LeadsByUserIdDocument,
    options,
  );
}
export function useLeadsByUserIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    LeadsByUserIdQuery,
    LeadsByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    LeadsByUserIdQuery,
    LeadsByUserIdQueryVariables
  >(LeadsByUserIdDocument, options);
}
export type LeadsByUserIdQueryHookResult = ReturnType<
  typeof useLeadsByUserIdQuery
>;
export type LeadsByUserIdLazyQueryHookResult = ReturnType<
  typeof useLeadsByUserIdLazyQuery
>;
export type LeadsByUserIdSuspenseQueryHookResult = ReturnType<
  typeof useLeadsByUserIdSuspenseQuery
>;
export type LeadsByUserIdQueryResult = Apollo.QueryResult<
  LeadsByUserIdQuery,
  LeadsByUserIdQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($password: String!, $email: String!, $type: String!) {
    login(password: $password, email: $email, type: $type) {
      user {
        ...UserFragment
      }
      token
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout {
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options,
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const CheckAuthDocument = gql`
  query CheckAuth {
    checkAuth {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useCheckAuthQuery__
 *
 * To run a query within a React component, call `useCheckAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckAuthQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CheckAuthQuery,
    CheckAuthQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckAuthQuery, CheckAuthQueryVariables>(
    CheckAuthDocument,
    options,
  );
}
export function useCheckAuthLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CheckAuthQuery,
    CheckAuthQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CheckAuthQuery, CheckAuthQueryVariables>(
    CheckAuthDocument,
    options,
  );
}
export function useCheckAuthSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CheckAuthQuery,
    CheckAuthQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CheckAuthQuery, CheckAuthQueryVariables>(
    CheckAuthDocument,
    options,
  );
}
export type CheckAuthQueryHookResult = ReturnType<typeof useCheckAuthQuery>;
export type CheckAuthLazyQueryHookResult = ReturnType<
  typeof useCheckAuthLazyQuery
>;
export type CheckAuthSuspenseQueryHookResult = ReturnType<
  typeof useCheckAuthSuspenseQuery
>;
export type CheckAuthQueryResult = Apollo.QueryResult<
  CheckAuthQuery,
  CheckAuthQueryVariables
>;
