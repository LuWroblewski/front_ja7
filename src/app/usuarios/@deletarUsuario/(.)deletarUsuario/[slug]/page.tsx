import Modal_del_user from '@/components/users/form_del/modal_del_user/modal_del_user';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Modal_del_user slug={params.slug} />
    </>
  );
}
