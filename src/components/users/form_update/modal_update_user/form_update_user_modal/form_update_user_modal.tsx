'use client';
import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { user_schema } from '../../../../../../validations/user_add_validation';

import { user_crud_notify_error, user_crud_notify_sucess } from '../../../../../../toastify';

import { useRouter } from 'next/navigation';
import user_tag from '../../../../../../utils/user_tag';

interface Props {
  slug: string;
}

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  password: string;
  confirm_password: string;
};

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  status: boolean;
  date_create: string;
  date_last_update: string;
};

type UsersResponse = {
  status: string;
  message: string;
  record: {
    users: User[];
  };
};

export default function Form_update_user_modal({ slug }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [dataUser, setDataUser] = useState<User | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({ resolver: yupResolver(user_schema) });

  useEffect(() => {
    const url_api = process.env.NEXT_PUBLIC_URL_API;

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${slug}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const data: UsersResponse = await response.json();
        const data_json = data.record.users[0];

        console.log(data_json);
        setDataUser(data_json);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, [slug]);

  const handleSubmit = async (data: Inputs) => {
    setIsLoading(true);

    const url_api = process.env.NEXT_PUBLIC_URL_API;

    const response = await fetch(`http://localhost:3001/users/${slug}`, {
      method: 'PUT',
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
        status: dataUser?.status || '',
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      return user_crud_notify_error('Atualização do usuário falhou, tente novamente.');
    }

    if (response.ok) {
      setIsLoading(false);
      user_crud_notify_sucess('Usuário atualizado com sucesso.');
      user_tag();
      router.push('/usuarios');
    }
  };

  useEffect(() => {
    setValue('first_name', dataUser?.first_name || '');
    setValue('last_name', dataUser?.last_name || '');
    setValue('email', dataUser?.email || '');
    setValue('role', dataUser?.role || '');
    setValue('password', dataUser?.password || '');
    setValue('confirm_password', dataUser?.password || '');
  }, [dataUser, setValue]);

  return (
    <>
      <form className='space-y-2' action='#' method='PUT' onSubmit={onSubmit(handleSubmit)}>
        <h2 className='text-3xl font-bold'> Editar Usúario</h2>
        <div className='flex space-x-4'>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Nome</span>
            </div>
            <input
              defaultValue={dataUser?.first_name || ''}
              {...register('first_name')}
              type='text'
              placeholder='Nome'
              className='input w-52 input-bordered '
            />

            <small className=' text-warning p-0.5'>{errors?.first_name?.message}</small>
          </label>

          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Sobrenome</span>
            </div>
            <input
              {...register('last_name')}
              defaultValue={dataUser?.last_name || ''}
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
              defaultValue={dataUser?.password || ''}
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
              defaultValue={dataUser?.password || ''}
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
            <input
              {...register('email')}
              defaultValue={dataUser?.email || ''}
              type='email'
              placeholder='Email'
              className='input w-52 input-bordered '
            />
            <small className=' text-warning p-0.5'>{errors?.email?.message}</small>
          </label>

          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Cargo</span>
            </div>
            <select {...register('role')} className='select select-bordered w-52 '>
              <option disabled selected hidden value=''>
                {dataUser?.role || ''}
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
