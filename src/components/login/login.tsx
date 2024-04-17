import Form_login from './form_login/form_login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='text-center mt-4'>
            <h1 className='text-5xl font-bold '>Login </h1>
          </div>
          <Form_login />
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={3000} theme='colored' />
    </div>
  );
}
