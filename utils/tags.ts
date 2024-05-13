'use server';

import { revalidateTag } from 'next/cache';

const user_tag = async () => {
  revalidateTag('users');
};

const petition_tag = async () => {
  revalidateTag('petitions');
};

export { petition_tag, user_tag };
