import Petitions from '@/components/petitions/petitions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
  return (
    <div className=' bg-base-300 h-screen'>
      <div className='px-4 pt-2'>
        <Petitions />
      </div>

      <ToastContainer position='top-right' autoClose={3000} theme='colored' />
    </div>
  );
}
