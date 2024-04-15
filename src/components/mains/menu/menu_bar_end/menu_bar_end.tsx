import Link from 'next/link';
import { IoBuildOutline, IoPersonOutline } from 'react-icons/io5';

export default function Menu_bar_end() {
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <IoPersonOutline className='text-2xl' />
        </div>
      </div>

      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-primary-content'
      >
        <li>
          <Link href='/me'>
            <IoPersonOutline className='text-xl' /> Minha conta
          </Link>
        </li>
        <li>
          <Link href='/suporte'>
            <IoBuildOutline className='text-xl' /> Suporte
          </Link>
        </li>
      </ul>
    </div>
  );
}
