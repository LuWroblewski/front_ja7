import Menu_table from './menu_table/menu_table';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Actions from './actions/actions';

type Petitions = {
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
  records: {
    petitions: Petitions[];
  };
};

export default async function Petitions() {
  const url_api = process.env.URL_API;

  const response = await fetch(`${url_api}/petitions`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    next: {
      tags: ['petitions'],
    },
  });

  const data: UsersResponse = await response.json();
  const data_json = data.records.petitions;

  return (
    <div className=' px-2 border-2 border-base-100  bg-base-100 rounded-md overflow-x-auto'>
      <Menu_table />
      <table className='table table-md table-zebra z-0 '>
        <thead>
          <tr>
            <th className='hidden md:table-cell'></th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th className='hidden md:table-cell'>Tipo / Tema</th>
            <th className='hidden md:table-cell'>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data_json.map((petitions: Petitions) => (
            <tr key={petitions.id}>
              <th className='hidden md:table-cell'>{petitions.id}</th>
              <td>{petitions.title}</td>
              <td className=' max-w-56'>{petitions.description}</td>
              <td className='flex-col space-y-3'>
                <p>{petitions.theme}</p>
                <hr className='my-1 border-t border-gray-400 opacity-50' />
                <p>{petitions.type_petition}</p>
              </td>
              {petitions.status === 'aguardando' && (
                <td>
                  <div className='badge badge-info '>{petitions.status}</div>
                </td>
              )}
              {(petitions.status === 'excluida' ||
                petitions.status === 'cancelada' ||
                petitions.status === 'recusada') && (
                <td>
                  <div className='badge badge-error '>{petitions.status}</div>
                </td>
              )}
              {petitions.status === 'concluida' && (
                <td>
                  <div className='badge badge-success '>{petitions.status}</div>
                </td>
              )}
              <td>
                <Actions slug={petitions.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer position='top-right' autoClose={3000} theme='colored' />
    </div>
  );
}
