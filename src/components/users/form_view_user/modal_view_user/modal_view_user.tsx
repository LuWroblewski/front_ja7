'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Form_view_user_modal from './form_view_user_modal/form_view_user_modal';

interface Props {
  slug: string;
}

export default function Modal_view_user({ slug }: Props) {
  const pathName = usePathname();

  if (pathName === '/usuarios' || pathName !== `/usuarios/visualizarUsuario/${slug}`) return null;

  return (
    <dialog
      id='visualizarUsuario'
      className='modal  modal-bottom sm:modal-middle bg-base-200 w-full bg-opacity-25'
      open
    >
      <div className='modal-box'>
        <Link href='/usuarios'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
        </Link>

        <Form_view_user_modal slug={slug} />
      </div>

      <form method='dialog' className='modal-backdrop'>
        <Link href='/usuarios'>
          <button>close</button>
        </Link>
      </form>
    </dialog>
  );
}
