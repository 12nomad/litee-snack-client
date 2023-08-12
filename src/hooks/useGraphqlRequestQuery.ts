import { QueryKey, useQuery } from '@tanstack/react-query';
import { RequestDocument, Variables, ClientError } from 'graphql-request';
import { TypedQueryDocumentNode } from 'graphql';

import { client } from '../utils/graphql-request.util';

const useGraphqlQuery = <T, U extends Variables>(
  queryKey: QueryKey | undefined,
  document: RequestDocument | TypedQueryDocumentNode<unknown, Variables>,
  variables?: U | undefined,
) =>
  useQuery<T, ClientError>({
    queryKey,
    queryFn: async () => await client.request(document, variables),
  });

export default useGraphqlQuery;
