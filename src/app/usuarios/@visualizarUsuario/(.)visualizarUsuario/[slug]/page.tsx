import Modal_view_user from '@/components/users/form_view_user/modal_view_user/modal_view_user';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Modal_view_user slug={params.slug} />
    </>
  );
}
