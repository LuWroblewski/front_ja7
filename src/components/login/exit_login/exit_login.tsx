'use client';
import { signOut } from 'next-auth/react';
import { IoExitOutline } from 'react-icons/io5';

export default function Exit_login() {
  return (
    <li onClick={() => signOut()}>
      <a className='text-error hover:bg-error hover:bg-opacity-45 hover:text-white'>
        <IoExitOutline className='text-xl' /> Sair
      </a>
    </li>
  );
}
