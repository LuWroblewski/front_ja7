import Menu_table from './menu_table/menu_table';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

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
    <div className=' px-2 border-2 border-base-100  bg-base-100 rounded-md'>
      <Menu_table />
      <table className='table table-zebra z-0 '>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data_json.map((user: User) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
