'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export default function FetchProvider({ children }: { children: React.ReactNode }) {
    const [ queryClient ] = useState(() => new QueryClient(
      {
        defaultOptions: {
          queries: {
            // refetchOnWindowFocus: false,
            // refetchOnMount: false,
            staleTime: 60 * 1000,  
          },
        },
      }
    ))
  
    return (
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    )
  }