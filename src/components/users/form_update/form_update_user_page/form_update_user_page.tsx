'use client';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { user_schema } from '../../../../../validations/user_add_validation';

import { create_notify_error, create_notify_sucess } from '../../../../../toastify';

import { useRouter } from 'next/navigation';
import user_tag from '../../../../../utils/user_tag';

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  password: string;
  confirm_password: string;
};

export default function Form_update_user_page() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(user_schema) });

  const handleSubmit = async (data: Inputs) => {
    setIsLoading(true);

    const url_api = process.env.NEXT_PUBLIC_URL_API;

    const response = await fetch(`${url_api}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        role: data.role,
        password: data.password,
        confirm_password: data.confirm_password,
        status: true,
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      return create_notify_error();
    }

    if (response.ok) {
      setIsLoading(false);
      create_notify_sucess();
      user_tag();
      router.push('/usuarios');
    }
  };

  return (
    <>
      <form className='space-y-2' action='#' method='POST' onSubmit={onSubmit(handleSubmit)}>
        <div className='flex space-x-4'>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Nome</span>
            </div>
            <input {...register('first_name')} type='text' placeholder='Nome' className='input w-52 input-bordered ' />

            <small className=' text-warning p-0.5'>{errors?.first_name?.message}</small>
          </label>

          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Sobrenome</span>
            </div>
            <input
              {...register('last_name')}
              type='text'
              placeholder='Sobrenome'
              className='input w-52 input-bordered'
            />
            <small className=' text-warning p-0.5'>{errors?.last_name?.message}</small>
          </label>
        </div>

        <div className='flex space-x-4'>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Senha</span>
            </div>
            <input
              {...register('password')}
              type='password'
              placeholder='Senha'
              className='input w-52 input-bordered '
            />
            <small className=' text-warning p-0.5'>{errors?.password?.message}</small>
          </label>

          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Confirma Senha</span>
            </div>
            <input
              {...register('confirm_password')}
              type='password'
              placeholder='Confirma Senha'
              className='input w-52 input-bordered'
            />
            <small className=' text-warning p-0.5'>{errors?.confirm_password?.message}</small>
          </label>
        </div>

        <div className='flex space-x-4'>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Email</span>
            </div>
            <input {...register('email')} type='email' placeholder='Email' className='input w-52 input-bordered ' />
            <small className=' text-warning p-0.5'>{errors?.email?.message}</small>
          </label>

          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Cargo</span>
            </div>
            <select {...register('role')} className='select select-bordered w-52 '>
              <option disabled selected hidden value=''>
                Cargo
              </option>
              <option value='admin'>Admin</option>
              <option value='user'>Usuário</option>
            </select>
            <small className=' text-warning p-0.5'>{errors?.role?.message}</small>
          </label>
        </div>
        <div className='form-control mt-8  flex justify-end items-end w-full'>
          <button className='btn btn-primary w-24 btn-sm'>
            {isLoading ? <span className='loading loading-spinner loading-xs'></span> : 'Entrar'}
          </button>
        </div>
      </form>
    </>
  );
}
