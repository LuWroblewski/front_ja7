import Link from 'next/link';
import { FiTrash2 } from 'react-icons/fi';
import { IoEyeOutline, IoPencil } from 'react-icons/io5';

export default function Actions() {
  return (
    <ul className='menu menu-horizontal bg-none rounded-box text-lg'>
      <Link href='usuarios/visualizarUsuario'>
        <li className='tooltip tooltip-top' data-tip='Visualizar usuário'>
          <p>
            <IoEyeOutline />
          </p>
        </li>
      </Link>

      <Link href='usuarios/editarUsuario'>
        <li className='tooltip tooltip-top' data-tip='Editar usuário'>
          <p>
            <IoPencil />
          </p>
        </li>
      </Link>

      <Link href='usuarios/excluirUsuario'>
        <li className='tooltip tooltip-top text-error' data-tip='Excluir usuário'>
          <p>
            <FiTrash2 />
          </p>
        </li>
      </Link>
    </ul>
  );
}
