import Modal_update_user from '@/components/users/form_update/modal_update_user/modal_update_user';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Modal_update_user slug={params.slug} />
    </>
  );
}
