import Modal_add_petition from '@/components/petitions/form_add/modal_add_petition/modal_add_petition';
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  const id = cookieStore.get('id')!.value;

  return (
    <div>
      <Modal_add_petition id={id} />
    </div>
  );
}
