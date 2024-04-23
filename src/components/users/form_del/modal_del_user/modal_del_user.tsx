'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Form_del_user_modal from './form_del_user_modal/form_del_user_modal';

export default function Modal_del_user() {
  const pathName = usePathname();

  if (pathName === '/usuarios' || pathName !== '/usuarios/deletarUsuario') return null;

  return (
    <dialog id='deletarUsuario' className='modal bg-base-200 w-full bg-opacity-25' open>
      <div className='modal-box'>
        <Link href='/usuarios'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
        </Link>

        <Form_del_user_modal />
      </div>

      <form method='dialog' className='modal-backdrop'>
        <Link href='/usuarios'>
          <button>close</button>
        </Link>
      </form>
    </dialog>
  );
}
