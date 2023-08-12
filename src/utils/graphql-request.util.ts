import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(import.meta.env.VITE_GRAPRHQL_API_URI, {
  credentials: 'include',
  mode: 'cors',
});
