'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { auth_schema } from '../../../../validations/auth_validation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  email: string;
  password: string;
};

export default function Form_login() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(auth_schema) });

  const notifySucess = () => toast.success('Login feito com sucesso.');
  const notifyError = () => toast.error('Autenticação falhou, tente novamente.');

  const handleSubmit = async (data: any) => {
    setIsLoading(true);

    const result = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/menu',
    });

    if (result?.error) {
      setIsLoading(false);
      notifyError();
    } else {
      notifySucess();
      router.push('/menu');
    }
  };

  return (
    <>
      <form className='card-body' action='#' method='POST' onSubmit={onSubmit(handleSubmit)}>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input {...register('email')} type='email' placeholder='email' className='input input-bordered' />
          <small className=' text-warning  p-0.5'>{errors?.email?.message}</small>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Senha</span>
          </label>
          <input {...register('password')} type='password' placeholder='senha' className='input input-bordered' />
          <small className=' text-warning p-0.5'>{errors?.password?.message}</small>
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-primary'>
            {isLoading ? <span className='loading loading-spinner loading-xs'></span> : 'Entrar'}
          </button>
        </div>
      </form>

      <ToastContainer position='top-right' autoClose={3000} theme='colored' />
    </>
  );
}
