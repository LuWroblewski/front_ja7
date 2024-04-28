'use client';
import { useState } from 'react';

import { user_crud_notify_error, user_crud_notify_sucess } from '../../../../../../toastify';

import { useRouter } from 'next/navigation';
import user_tag from '../../../../../../utils/user_tag';

interface Props {
  slug: string;
}

export default function Form_del_user_modal({ slug }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const url_api = process.env.NEXT_PUBLIC_URL_API;

    const response = await fetch(`${url_api}/users/${slug}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        status: false,
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      return user_crud_notify_error('Inativação do usuário falhou, tente novamente.');
    }

    if (response.ok) {
      setIsLoading(false);
      user_crud_notify_sucess('Usuário inativado com sucesso.');
      user_tag();
      router.push('/usuarios');
    }
  };

  return (
    <>
      <form className='space-y-2' action='#' method='POST' onSubmit={handleSubmit}>
        <h2 className='text-3xl font-bold'>Inativar Usúario</h2>
        <p className=' text-lg font-bold'>Tem certeza que deseja inativar? </p>

        <div className='form-control mt-8  flex justify-end items-end w-full'>
          <button className='btn  btn-warning w-24 btn-sm'>
            {isLoading ? <span className='loading loading-spinner loading-xs'></span> : 'Inativar'}
          </button>
        </div>
      </form>
    </>
  );
}
