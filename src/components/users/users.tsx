import Menu_table from './menu_table/menu_table';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Actions from './actions/actions';

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
  records: {
    users: User[];
  };
};

export default async function Users() {
  const url_api = process.env.URL_API;

  const response = await fetch(`${url_api}/users`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    next: {
      tags: ['users'],
    },
  });

  const data: UsersResponse = await response.json();
  const data_json = data.records.users;

  return (
    <div className=' px-2 border-2 border-base-100  bg-base-100 rounded-md overflow-x-auto'>
      <Menu_table />
      <table className='table table-md table-zebra z-0 '>
        <thead>
          <tr>
            <th className='hidden md:table-cell'></th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th className='hidden md:table-cell'>Email</th>
            <th className='hidden md:table-cell'>Cargo</th>
            <th className='hidden md:table-cell'>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data_json.map((user: User) => (
            <tr key={user.id}>
              <th className='hidden md:table-cell'>{user.id}</th>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td className='hidden md:table-cell'>{user.email}</td>
              <td className='hidden md:table-cell'>{user.role === 'user' ? 'usuário' : 'admin'}</td>
              <td className='hidden md:table-cell'>
                {user.status ? (
                  <div className='text-success text-lg tooltip ' data-tip='Ativo'>
                    <IoCheckmarkCircleOutline />
                  </div>
                ) : (
                  <div className='text-error text-lg tooltip ' data-tip='Inativo'>
                    <IoCloseCircleOutline />
                  </div>
                )}
              </td>
              <td>
                <Actions slug={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer position='top-right' autoClose={3000} theme='colored' />
    </div>
  );
}
