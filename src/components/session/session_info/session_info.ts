'use server';

import { cookies } from 'next/headers';

export interface SessionUser {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  role: string;
}

export const session_info = async (session_user: SessionUser | string | null | undefined) => {
  if (typeof session_user !== 'string' && session_user) {
    cookies().set('role', session_user.role);
  }
};
