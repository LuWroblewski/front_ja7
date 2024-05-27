'use client';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { petition_schema } from '../../../../../validations/petition_add_validation';

import { user_crud_notify_error, user_crud_notify_sucess } from '../../../../../toastify';

import { useRouter } from 'next/navigation';
import { petition_tag } from '../../../../../utils/tags';

interface Props {
  id: string;
}

type Inputs = {
  title: string;
  description: string;
  type: string;
  theme: string;
};

export default function Form_add_petition_page({ id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('');
  const router = useRouter();

  const handleThemeChange = (e: any) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
  };

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(petition_schema) });

  const handleSubmit = async (data: Inputs) => {
    setIsLoading(true);

    const url_api = process.env.NEXT_PUBLIC_URL_API;

    const response = await fetch(`${url_api}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        type_petition: data.type,
        theme: data.theme,
        status: 'aguardando',
        file_id: 1,
        user_last_update: Number(id),
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      return user_crud_notify_error('Criação da petição falhou, tente novamente.');
    }

    if (response.ok) {
      setIsLoading(false);
      user_crud_notify_sucess('Petição criada com sucesso.');
      petition_tag();
      router.push('/usuarios');
    }
  };

  return (
    <div className='w-screen flex justify-center py-4 '>
      <form className='space-y-2' action='#' method='POST' onSubmit={onSubmit(handleSubmit)}>
        <h2 className='text-3xl font-bold'> Adicionar Petição</h2>
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text'>Titulo</span>
          </div>
          <input {...register('title')} type='text' placeholder='Titulo' className='input w-full input-bordered ' />

          <small className=' text-warning p-0.5'>{errors?.title?.message}</small>
        </label>
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text'>Descrição</span>
          </div>
          <textarea
            {...register('description')}
            placeholder='Descrição'
            className='textarea textarea-bordered w-full'
            maxLength={150}
          />

          <small className=' text-warning p-0.5'>{errors?.title?.message}</small>
        </label>

        <div className='flex space-x-4'>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Tema</span>
            </div>
            <select {...register('theme')} className='select select-bordered w-52 ' onChange={handleThemeChange}>
              <option disabled selected hidden value=''>
                Tema
              </option>
              <option value='juridico'>Jurídico</option>
              <option value='processos'>Processos</option>
            </select>
            <small className=' text-warning p-0.5'>{errors?.theme?.message}</small>
          </label>

          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Tipo</span>
            </div>
            <select {...register('type')} className='select select-bordered w-52 '>
              <option disabled selected hidden value=''>
                Tipo
              </option>
              {theme === 'juridico' && (
                <>
                  <option value='contratos'>Contratos</option>
                  <option value='processos_judiciais'>Processos Judiciais</option>
                  <option value='consultoria_juridica'>Consultoria Jurídica</option>
                </>
              )}
              {theme === 'processos' && (
                <>
                  <option value='apelacao'>Apelação</option>
                  <option value='acao_civil_publica'>Ação Civil Pública</option>
                  <option value='mandado_seguranca'>Mandado de Segurança</option>
                </>
              )}
            </select>
            <small className=' text-warning p-0.5'>{errors?.type?.message}</small>
          </label>
        </div>
        <div className='form-control mt-8  flex justify-end items-end w-full'>
          <button className='btn btn-primary w-24 btn-sm'>
            {isLoading ? <span className='loading loading-spinner loading-xs'></span> : 'Adicionar'}
          </button>
        </div>
      </form>
    </div>
  );
}
