interface Props {
  slug: string;
}

type Petition = {
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
  record: {
    petition: Petition[];
  };
};

export default async function Form_view_petition_page({ slug }: Props) {
  const url_api = process.env.NEXT_PUBLIC_URL_API;

  const response = await fetch(`${url_api}/petitions/${slug}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    next: {
      tags: ['petitions'],
    },
  });

  const data: UsersResponse = await response.json();
  const data_json = data.record.petition;

  return (
    <div className='w-screen flex justify-center py-4 '>
      {data_json.map((petition: Petition) => (
        <div key={petition.id}>
          {petition.status === 'aguardando' && <small className='badge badge-info gap-2'>{petition.status}</small>}
          {(petition.status === 'excluida' || petition.status === 'cancelada' || petition.status === 'recusada') && (
            <small className='badge badge-error gap-2'>{petition.status}</small>
          )}
          {petition.status === 'concluida' && <small className='badge badge-success gap-2'>{petition.status}</small>}

          <h3 className='font-bold text-3xl my-2'>{petition.title}</h3>
          <hr className='w-full border-gray-300' />

          <div className='mt-3'>
            <div className='flex justify-around   text-left   '>
              <div className='flex-col '>
                <small className='tracking-wider'>Descrição</small>
                <p className='text-lg font-semibold mr-3'>{petition.description}</p>
              </div>
            </div>

            <div className='flex justify-around   text-left  w-96'>
              <div className='flex-col '>
                <small className='tracking-wider'>Tipo da Petição</small>
                <p className='text-lg font-semibold mr-3'>{petition.type_petition}</p>
              </div>

              <div className='flex-col '>
                <small className='tracking-wider'>Tema da Petição</small>
                <p className='text-lg font-semibold mr-3'>{petition.theme}</p>
              </div>
            </div>

            <div className='flex justify-around   text-left  '>
              <div className='flex-col '>
                <small className='tracking-wider'>Data de Criação</small>
                <p className='text-lg font-semibold mr-3'>{new Date(petition.date_create).toLocaleString()}</p>
              </div>

              <div className='flex-col '>
                <small className='tracking-wider'>Data da Ultima Atualização</small>
                <p className='text-lg font-semibold mr-3'>{new Date(petition.date_last_update).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
