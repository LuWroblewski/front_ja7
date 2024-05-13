'use client';

import { useEffect, useState } from 'react';

interface Props {
  slug: string;
}

type Petition = {
  id: number;
  title: string;
  description: string;
  theme: string;
  type_petition: string;
  status: string;
  file_id: number;
  user_last_update: number;
  date_create: string;
  date_last_update: string;
};

type UsersResponse = {
  status: string;
  message: string;
  record: {
    petition: Petition[];
  };
};

export default function Form_view_petition_modal({ slug }: Props) {
  const [dataPetition, setDataPetition] = useState<Petition | null>(null);

  useEffect(() => {
    const url_api = process.env.NEXT_PUBLIC_URL_API;

    const fetchData = async () => {
      try {
        const response = await fetch(`${url_api}/petitions/${slug}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          },
          next: {
            tags: ['petitions'],
          },
        });
        const data: UsersResponse = await response.json();
        const data_json = data.record.petition[0];

        setDataPetition(data_json);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <>
      {dataPetition && (
        <div key={dataPetition.id}>
          {dataPetition.status === 'aguardando' && (
            <small className='badge badge-info gap-2'>{dataPetition.status}</small>
          )}
          {(dataPetition.status === 'excluida' ||
            dataPetition.status === 'cancelada' ||
            dataPetition.status === 'recusada') && (
            <small className='badge badge-error gap-2'>{dataPetition.status}</small>
          )}
          {dataPetition.status === 'concluida' && (
            <small className='badge badge-success gap-2'>{dataPetition.status}</small>
          )}

          <h3 className='font-bold text-3xl my-2'>{dataPetition.title}</h3>
          <hr className='w-full border-gray-300' />

          <div className='mt-3'>
            <div className='flex justify-around   text-left   '>
              <div className='flex-col '>
                <small className='tracking-wider'>Descrição</small>
                <p className='text-lg font-semibold mr-3'>{dataPetition.description}</p>
              </div>
            </div>

            <div className='flex justify-around   text-left  w-96'>
              <div className='flex-col '>
                <small className='tracking-wider'>Tipo da Petição</small>
                <p className='text-lg font-semibold mr-3'>{dataPetition.type_petition}</p>
              </div>

              <div className='flex-col '>
                <small className='tracking-wider'>Tema da Petição</small>
                <p className='text-lg font-semibold mr-3'>{dataPetition.theme}</p>
              </div>
            </div>

            <div className='flex justify-around   text-left  '>
              <div className='flex-col '>
                <small className='tracking-wider'>Data de Criação</small>
                <p className='text-lg font-semibold mr-3'>{new Date(dataPetition.date_create).toLocaleString()}</p>
              </div>

              <div className='flex-col '>
                <small className='tracking-wider'>Data da Ultima Atualização</small>
                <p className='text-lg font-semibold mr-3'>{new Date(dataPetition.date_last_update).toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-2 space-x-4'>
            <button className='btn  btn-outline btn-error'>Rejeitar</button>
            <button className='btn  btn-outline btn-success'>Aceitar</button>
          </div>
        </div>
      )}
    </>
  );
}
