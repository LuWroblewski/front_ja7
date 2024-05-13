'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { session_info } from '../session_info/session_info';
import { useEffect } from 'react';

export default function Session_auth() {
  const { data: session } = useSession();

  useEffect(() => {
    session_info(session?.user?.image);
    console.log(session?.user?.image);
  }, [session?.user?.image]);

  useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  return <div></div>;
}
