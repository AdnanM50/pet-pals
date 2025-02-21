import React from 'react'
import FetchProvider from './fetch_provider'
import UserProvider from './user_provider'
import { initializeAxiosInstance } from '@/hooks/instance';
import { cookies } from 'next/headers';

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const token = cookies().get("accessToken")?.value;

  if (token) {
    initializeAxiosInstance(token);
  }

  const user = await fetch(`${process.env.backendUrl}/user`,
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  ).then((res) => res.json().then((data) => data?.data));

  return (
    <FetchProvider>
      <UserProvider user={user}>
        {children}
      </UserProvider>
    </FetchProvider>
  )
}

export default Providers