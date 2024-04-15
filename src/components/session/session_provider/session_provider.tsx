'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode;
};

export default function Provider({ children }: ProviderProps): JSX.Element {
  return <SessionProvider>{children}</SessionProvider>;
}
