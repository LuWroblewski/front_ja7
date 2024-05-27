'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Form_del_petition_modal from './form_del_petition_modal/form_del_petition_modal';

interface Props {
  slug: string;
}

export default function Modal_del_petition({ slug }: Props) {
  const pathName = usePathname();

  if (pathName === '/peticoes' || pathName !== `/peticoes/deletarPeticao/${slug}`) return null;

  return (
    <dialog id='deletarPeticao' className='modal  modal-bottom sm:modal-middle  bg-base-200 w-full bg-opacity-25' open>
      <div className='modal-box'>
        <Link href='/peticoes'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
        </Link>

        <Form_del_petition_modal slug={slug} />
      </div>

      <form method='dialog' className='modal-backdrop'>
        <Link href='/peticoes'>
          <button>close</button>
        </Link>
      </form>
    </dialog>
  );
}
