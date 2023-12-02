'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  setQueryClient
} from '@/lib/user-api-hooks';

import { App } from './App';



const queryClient = new QueryClient();
setQueryClient(queryClient);

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

