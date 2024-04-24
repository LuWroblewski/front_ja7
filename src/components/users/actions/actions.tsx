import Link from 'next/link';
import { FiTrash2 } from 'react-icons/fi';
import { IoEyeOutline, IoPencil } from 'react-icons/io5';

interface Props {
  slug: number;
}

export default function Actions({ slug }: Props) {
  return (
    <ul className='menu menu-horizontal bg-none rounded-box text-lg'>
      <Link href={`usuarios/visualizarUsuario/${slug}`}>
        <li className='tooltip tooltip-top' data-tip='Visualizar usuário'>
          <p>
            <IoEyeOutline />
          </p>
        </li>
      </Link>

      <Link href={`usuarios/editarUsuario/${slug}`}>
        <li className='tooltip tooltip-top' data-tip='Editar usuário'>
          <p>
            <IoPencil />
          </p>
        </li>
      </Link>

      <Link href={`usuarios/deletarUsuario/${slug}`}>
        <li className='tooltip tooltip-top text-error' data-tip='Excluir usuário'>
          <p>
            <FiTrash2 />
          </p>
        </li>
      </Link>
    </ul>
  );
}
