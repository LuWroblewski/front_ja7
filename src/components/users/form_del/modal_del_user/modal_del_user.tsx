'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Form_del_user_modal from './form_del_user_modal/form_del_user_modal';

interface Props {
  slug: string;
}

export default function Modal_del_user({ slug }: Props) {
  const pathName = usePathname();

  if (pathName === '/usuarios' || pathName !== `/usuarios/deletarUsuario/${slug}`) return null;

  return (
    <dialog id='deletarUsuario' className='modal  modal-bottom sm:modal-middle  bg-base-200 w-full bg-opacity-25' open>
      <div className='modal-box'>
        <Link href='/usuarios'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
        </Link>

        <Form_del_user_modal slug={slug} />
      </div>

      <form method='dialog' className='modal-backdrop'>
        <Link href='/usuarios'>
          <button>close</button>
        </Link>
      </form>
    </dialog>
  );
}
