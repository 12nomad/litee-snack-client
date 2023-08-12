import { TypedQueryDocumentNode } from 'graphql';
import { ClientError, RequestDocument, Variables } from 'graphql-request';

import { REFRESH_TOKEN } from '../gql/mutations/refresh-token.mutation';
import getErrorMessage from './get-error-message.util';
import { client } from './graphql-request.util';

const refreshToken = async <T>(
  document: RequestDocument | TypedQueryDocumentNode<T, Variables>,
  variables?: Variables | undefined,
): Promise<T> => {
  try {
    return await client.request(document, variables);
  } catch (error) {
    if (error instanceof ClientError) {
      const { message, statusCode } = getErrorMessage(error.response.errors);
      if (statusCode === 401 && message === 'Unauthorized') {
        return client
          .request(REFRESH_TOKEN)
          .then(async () => await client.request(document, variables));
      }
    }

    // FIXME:
    // else if (error instanceof Error && error?.message === 'Network request failed')

    return await client.request(document, variables);
  }
};

export default refreshToken;
