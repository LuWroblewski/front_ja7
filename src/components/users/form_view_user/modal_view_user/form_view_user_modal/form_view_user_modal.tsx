'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { user_schema } from '../../../../../../validations/user_add_validation';
import { user_crud_notify_error, user_crud_notify_sucess } from '../../../../../../toastify';
import user_tag from '../../../../../../utils/user_tag';
import { useEffect, useState } from 'react';

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

export default function Form_view_user_modal({ slug }: Props) {
  const [dataUser, setDataUser] = useState<User | null>(null);

  useEffect(() => {
    const url_api = process.env.NEXT_PUBLIC_URL_API;

    const fetchData = async () => {
      try {
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
        const data_json = data.record.users[0];

        setDataUser(data_json);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <>
      {dataUser && (
        <div key={dataUser.id}>
          <h3 className='font-bold text-3xl my-2'>
            {dataUser.first_name} {dataUser.last_name}
          </h3>
          <hr className='w-full border-gray-300' />

          <div className='mt-3'>
            <div className='flex justify-around   text-left   '>
              <div className='flex-col '>
                <small className='tracking-wider'>email</small>
                <p className='text-lg font-semibold mr-3'>{dataUser.email}</p>
              </div>
            </div>

            <div className='flex justify-around   text-left  w-96'>
              <div className='flex-col '>
                <small className='tracking-wider'>Status</small>
                <p className='text-lg font-semibold mr-3'>{dataUser.status ? 'Ativo' : 'Inativo'}</p>
              </div>

              <div className='flex-col '>
                <small className='tracking-wider'>Cargo</small>
                <p className='text-lg font-semibold mr-3'>{dataUser.role === 'user' ? 'usuário' : 'admin'}</p>
              </div>
            </div>

            <div className='flex justify-around   text-left  '>
              <div className='flex-col '>
                <small className='tracking-wider'>Data de Criação</small>
                <p className='text-lg font-semibold mr-3'>{new Date(dataUser.date_create).toLocaleString()}</p>
              </div>

              <div className='flex-col '>
                <small className='tracking-wider'>Data da Ultima Atualização</small>
                <p className='text-lg font-semibold mr-3'>{new Date(dataUser.date_last_update).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
