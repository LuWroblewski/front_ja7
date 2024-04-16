'use server';

import { revalidateTag } from 'next/cache';

export default async function user_tag() {
  revalidateTag('users');
}
