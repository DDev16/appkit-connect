'use client'

import { wagmiAdapter, projectId, networks } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, flare, songbird, songbirdTestnet } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'next-reown-appkit',
  description: 'next-reown-appkit',
  url: 'https://github.com/0xonerb/next-reown-appkit-ssr', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: mainnet,
  metadata: metadata,
  themeMode: 'light',
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

function parseCookies(cookieString: string | null): Record<string, string> {
  if (!cookieString) return {};

  return cookieString.split(';').reduce((cookies: Record<string, string>, cookie) => {
    const [key, value] = cookie.split('=').map(part => part.trim());
    if (key && value) {
      cookies[key] = value;
    }
    return cookies;
  }, {});
}

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  let initialState;

  try {
    // Parse cookies into an object
    const parsedCookies = parseCookies(cookies);
    // Pass the specific cookie key expected by cookieToInitialState
    initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, parsedCookies['wagmi'] || undefined);
  } catch (error) {
    console.error('Failed to parse cookies:', error);
    initialState = undefined; // Fallback to default state
  }

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;

