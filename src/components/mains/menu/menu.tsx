import Menu_bar_end from './menu_bar_end/menu_bar_end';
import Menu_bar_start from './menu_bar_start/menu_bar';
import Notification from './notification/notification';
import Image from 'next/image';
import dark_logo from '../../../../images/dark_logo.png';
import light_logo from '../../../../images/light_logo.png';

export default function Menu() {
  return (
    <div className='navbar bg-base-100 border-b-2 border-b-base-200 '>
      <div className='navbar-start'>
        <Menu_bar_start />
      </div>

      <div className='navbar-center'>
        <div className='avatar dark:hidden w-full h-10  items-center '>
          <div className='w-48 rounded'>
            <Image src={light_logo} alt='Light logo' layout='fill' objectFit='contain' />
          </div>
        </div>
        <div className='avatar hidden dark:block w-full h-10 items-center'>
          <div className='w-48 rounded'>
            <Image src={dark_logo} alt='Dark logo' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>
      <div className='navbar-end'>
        <Notification />
        <Menu_bar_end />
      </div>
    </div>
  );
}
