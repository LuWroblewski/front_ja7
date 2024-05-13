import Form_add_petition_page from '@/components/petitions/form_add/form_add_petition_page/form_add_user_petition';
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  const id = cookieStore.get('id')!.value;

  return (
    <div>
      <Form_add_petition_page id={id} />
    </div>
  );
}
