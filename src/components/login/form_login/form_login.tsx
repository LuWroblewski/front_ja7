'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { authSchema } from '../../../../validations/auth-validation';

type Inputs = {
  email: string;
  password: string;
};

export default function Form_login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(authSchema) });

  const handleSubmit = async (data: any) => {
    setIsLoading(true);

    const result = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/menu',
    });

    if (result?.error) {
      setIsLoading(false);
      setError('Autenticação falhou, tente novamente.');
    } else {
      router.push('/menu');
    }
  };

  return (
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
      <small className=' text-warning p-0.5 text-center'>{error}</small>
      <div className='form-control mt-6'>
        <button className='btn btn-primary'>
          {isLoading ? <span className='loading loading-spinner loading-xs'></span> : 'Entrar'}
        </button>
      </div>
    </form>
  );
}
