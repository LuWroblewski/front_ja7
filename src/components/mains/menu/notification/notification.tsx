import Link from 'next/link';
import { IoBuildOutline, IoNotificationsOutline, IoPersonOutline } from 'react-icons/io5';

export default function Notification() {
  return (
    <div className='dropdown dropdown-end '>
      <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <IoNotificationsOutline className='text-2xl' />

          <span className='badge badge-xs badge-primary animate-bounce  indicator-item '></span>
        </div>
      </div>
      <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
        <li>
          <Link href='/'>
            <IoPersonOutline className='text-xl' /> --
          </Link>
        </li>
        <li>
          <Link href='/'>
            <IoBuildOutline className='text-xl' /> --
          </Link>
        </li>
      </ul>
    </div>
  );
}
