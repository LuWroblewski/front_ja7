import Link from 'next/link';
import { TiDocumentAdd } from 'react-icons/ti';
import SearchPetition from './searchPetition/searchPetition';

export default function Menu_table() {
  return (
    <ul className='menu menu-horizontal rounded-box flex justify-between items-center w-full px-8'>
      <Link href='peticoes/adicionarPeticao'>
        <button className='btn btn-outline btn-sm m'>
          <TiDocumentAdd className='text-xl' />
          Adicionar Petição
        </button>
      </Link>
      <SearchPetition />
    </ul>
  );
}
