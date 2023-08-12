import { SubscriptionClient } from 'graphql-subscriptions-client';

const subscriptionClient = new SubscriptionClient(
  'ws://localhost:6969/graphql',
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

export default subscriptionClient;
