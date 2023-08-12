import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.tsx';
import './index.css';

const client = new QueryClient({
  defaultOptions: { queries: {} },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      {/* <ApolloProvider client={apollo}> */}
      <BrowserRouter>
        <HelmetProvider>
          <App />
          <ReactQueryDevtools />
        </HelmetProvider>
      </BrowserRouter>
      {/* </ApolloProvider> */}
    </QueryClientProvider>
    ,
  </React.StrictMode>,
);
