import Menu_bar_end from './menu_bar_end/menu_bar_end';
import Menu_bar_start from './menu_bar_start/menu_bar';
import Notification from './notification/notification';

export default function Menu() {
  return (
    <div className='navbar bg-base-100 border-b-2 border-b-base-200 '>
      <div className='navbar-start'>
        <Menu_bar_start />
      </div>

      <div className='navbar-center'>
        <a className='btn btn-ghost text-xl'>Maxon Oil</a>
      </div>
      <div className='navbar-end'>
        <Notification />
        <Menu_bar_end />
      </div>
    </div>
  );
}
