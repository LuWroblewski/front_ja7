import Link from 'next/link';
import { IoPersonAddOutline } from 'react-icons/io5';

export default function Menu_table() {
  return (
    <ul className='menu menu-horizontal rounded-box'>
      <Link href='peticoes/adicionarPeticao'>
        <button className='btn btn-outline btn-sm m'>
          <IoPersonAddOutline />
          Adicionar Petição
        </button>
      </Link>
    </ul>
  );
}
