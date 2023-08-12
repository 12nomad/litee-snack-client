import { GraphQLClient } from 'graphql-request';
import { TypedQueryDocumentNode } from 'graphql';
import { ClientError, RequestDocument, Variables } from 'graphql-request';
import { SubscriptionClient } from 'graphql-subscriptions-client';

import { REFRESH_TOKEN } from '../gql/mutations/';
import getErrorMessage from '../utils/get-error-message.util';

class ClientService {
  protected client = new GraphQLClient(import.meta.env.VITE_GRAPRHQL_API_URI, {
    credentials: 'include',
    mode: 'cors',
  });

  protected subscriptionClient = new SubscriptionClient(
    import.meta.env.VITE_GRAPRHQL_API_WEBSOCKET_URI,
    {
      reconnect: true,
      lazy: true, // only connect when there is a query
      connectionCallback: (error) => {
        error && console.error(error);
      },
      connectionParams: {
        credentials: 'include',
      },
    },
  );

  async refreshToken<T>(
    document: RequestDocument | TypedQueryDocumentNode<T, Variables>,
    variables?: Variables | undefined,
  ): Promise<T> {
    try {
      return await this.client.request(document, variables);
    } catch (error) {
      if (error instanceof ClientError) {
        const { message, statusCode } = getErrorMessage(error.response.errors);
        if (statusCode === 401 && message === 'Unauthorized') {
          return this.client
            .request(REFRESH_TOKEN)
            .then(async () => await this.client.request(document, variables));
        }
      }

      // FIXME:
      // else if (error instanceof Error && error?.message === 'Network request failed')

      return await this.client.request(document, variables);
    }
  }
}

export default ClientService;
