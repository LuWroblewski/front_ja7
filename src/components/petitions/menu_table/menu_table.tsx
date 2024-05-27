import Link from 'next/link';
import { TiDocumentAdd } from 'react-icons/ti';

export default function Menu_table() {
  return (
    <ul className='menu menu-horizontal rounded-box'>
      <Link href='peticoes/adicionarPeticao'>
        <button className='btn btn-outline btn-sm m'>
          <TiDocumentAdd className='text-xl' />
          Adicionar Petição
        </button>
      </Link>
    </ul>
  );
}
