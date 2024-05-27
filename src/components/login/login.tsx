import Form_login from './form_login/form_login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import dark_logo from '../../../images/dark_logo.png';
import light_logo from '../../../images/light_logo.png';

export default function Login() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='px-4 mt-4'>
            <div className='avatar dark:hidden w-full h-24 items-center '>
              <div className='w-48 rounded'>
                <Image src={light_logo} alt='Light logo' layout='fill' objectFit='contain' />
              </div>
            </div>
            <div className='avatar hidden dark:block w-full h-24 items-center'>
              <div className='w-48 rounded'>
                <Image src={dark_logo} alt='Dark logo' layout='fill' objectFit='contain' />
              </div>
            </div>
          </div>
          <div className='text-center '>
            <h1 className='text-5xl font-bold '>Login </h1>
          </div>
          <Form_login />
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={3000} theme='colored' />
    </div>
  );
}
