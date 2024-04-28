import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { user_schema } from '../../../../../validations/user_add_validation';

import { user_crud_notify_error, user_crud_notify_sucess } from '../../../../../toastify';

import { useRouter } from 'next/navigation';
import user_tag from '../../../../../utils/user_tag';

interface Props {
  slug: string;
}

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
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

export default async function Form_view_user_page({ slug }: Props) {
  const url_api = process.env.NEXT_PUBLIC_URL_API;

  const response = await fetch(`${url_api}/users/${slug}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    next: {
      tags: ['users'],
    },
  });

  const data: UsersResponse = await response.json();
  const data_json = data.record.users;

  return (
    <div className='w-screen flex justify-center py-4 '>
      {data_json.map((user: User) => (
        <div key={user.id}>
          <h3 className='font-bold text-3xl my-2'>
            {user.first_name} {user.last_name}
          </h3>
          <hr className='w-full border-gray-300' />

          <div className='mt-3'>
            <div className='flex justify-around   text-left   w-full'>
              <div className='flex-col '>
                <small className='tracking-wider'>Status</small>
                <p className='text-lg font-semibold mr-3'>{user.status ? 'Ativo' : 'Inativo'}</p>

                <small className='tracking-wider'>Cargo</small>
                <p className='text-lg font-semibold mr-3'>{user.role === 'user' ? 'usuário' : 'admin'}</p>
              </div>

              <div className='flex-col '>
                <small className='tracking-wider'>email</small>
                <p className='text-lg font-semibold mr-3'>{user.email}</p>

                <small className='tracking-wider'>Cargo</small>
                <p className='text-lg font-semibold mr-3'>{user.role === 'user' ? 'usuário' : 'admin'}</p>
              </div>

              <div className='flex-col '>
                <small className='tracking-wider'>Data de Criação</small>
                <p className='text-lg font-semibold mr-3'>{new Date(user.date_create).toLocaleString()}</p>

                <small className='tracking-wider'>Data da Última Atualização</small>
                <p className='text-lg font-semibold mr-3'>{new Date(user.date_last_update).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
