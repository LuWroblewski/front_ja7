import { cookies } from 'next/headers';
import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoHomeOutline, IoPeopleOutline } from 'react-icons/io5';

export default function Menu_bar_start() {
  const cookieStore = cookies();
  const roleCookie = cookieStore.get('role');
  const role = roleCookie ? roleCookie.value : undefined;

  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label htmlFor='my-drawer' className='btn btn-ghost btn-circle drawer-button text-2xl'>
          <HiMenuAlt2 />
        </label>
      </div>
      <div className='drawer-side z-50'>
        <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content '>
          <li>
            <Link href='/menu'>
              <IoHomeOutline className='text-xl' /> Menu
            </Link>
          </li>
          <li>
            <Link href='/peticoes'>
              <IoPeopleOutline className='text-xl' /> Painel de Petições
            </Link>
          </li>

          {role && typeof role === 'string' && role === 'admin' && (
            <li>
              <Link href='/usuarios'>
                <IoPeopleOutline className='text-xl' /> Painel de Gerenciamento
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
