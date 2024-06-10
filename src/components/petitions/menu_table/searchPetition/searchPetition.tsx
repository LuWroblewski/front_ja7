'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TiZoomOutline } from 'react-icons/ti';
import { notify_info } from '../../../../../toastify';

export default function SearchPetition() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleKeyDown = async (event: any) => {
    const url_api = process.env.NEXT_PUBLIC_URL_API;

    if (event.key === 'Enter') {
      const response = await fetch(`${url_api}/petitions/${searchQuery}`);

      const data = await response.json();

      if (response.ok && data.record && data.record.petition && data.record.petition.length > 0) {
        router.push(`/peticoes/visualizarPeticao/${searchQuery}`);
      } else {
        notify_info('petição não encontrada!');
      }
    }
  };

  return (
    <label className='input input-md input-bordered flex items-center gap-2'>
      <input
        type='text'
        className='grow'
        placeholder='Procurar Petição'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <TiZoomOutline className='text-2xl' />
    </label>
  );
}
