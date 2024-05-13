import { cookies } from 'next/headers';
import Link from 'next/link';
import { FiTrash2 } from 'react-icons/fi';
import { IoEyeOutline, IoPencil } from 'react-icons/io5';

interface Props {
  slug: number;
}

export default function Actions({ slug }: Props) {
  const cookieStore = cookies();
  const role = cookieStore.get('role')!.value;

  return (
    <ul className='menu menu-horizontal bg-none rounded-box text-lg'>
      <Link href={`peticoes/visualizarPeticao/${slug}`}>
        <li className='tooltip tooltip-top' data-tip='Visualizar Petição'>
          <p>
            <IoEyeOutline />
          </p>
        </li>
      </Link>

      {role && typeof role === 'string' && role === 'admin' && (
        <Link href={`peticoes/editarPeticao/${slug}`}>
          <li className='tooltip tooltip-top' data-tip='Editar Petição'>
            <p>
              <IoPencil />
            </p>
          </li>
        </Link>
      )}

      {role && typeof role === 'string' && role === 'admin' && (
        <Link href={`peticoes/deletarPeticao/${slug}`}>
          <li className='tooltip tooltip-top text-error' data-tip='Excluir Petição'>
            <p>
              <FiTrash2 />
            </p>
          </li>
        </Link>
      )}
    </ul>
  );
}
