// import {
//   ApolloClient,
//   InMemoryCache,
//   split,
//   createHttpLink,
// } from '@apollo/client';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { SubscriptionClient } from 'subscriptions-transport-ws';
// import { getMainDefinition } from '@apollo/client/utilities';

// const wsLink = new WebSocketLink(
//   new SubscriptionClient('ws://localhost:6969/graphql', {
//     reconnect: true,
//     lazy: true,
//     connectionParams: {
//       credentials: 'include',
//     },
//   }),
// );

// const httpLink = createHttpLink({
//   uri: `http://localhost:6969/graphql`,
//   credentials: 'include',
// });

// const link = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );

// const apollo = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
//   credentials: 'include',
// });

// export default apollo;
