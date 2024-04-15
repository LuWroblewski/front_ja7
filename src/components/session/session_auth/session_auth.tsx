'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Session_auth() {
  useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  return <div></div>;
}
