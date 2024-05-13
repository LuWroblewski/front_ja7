'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Form_add_petition_modal from './form_add_petition_modal/form_add_user_modal';

interface Props {
  id: string;
}

export default function Modal_add_petition({ id }: Props) {
  const pathName = usePathname();

  if (pathName === '/peticoes' || pathName !== '/peticoes/adicionarPeticao') return null;

  return (
    <dialog
      id='adicionarPeticao'
      className='modal  modal-bottom sm:modal-middle  bg-base-200 w-full bg-opacity-25'
      open
    >
      <div className='modal-box'>
        <Link href='/peticoes'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
        </Link>

        <Form_add_petition_modal id={id} />
      </div>

      <form method='dialog' className='modal-backdrop'>
        <Link href='/peticoes'>
          <button>close</button>
        </Link>
      </form>
    </dialog>
  );
}
