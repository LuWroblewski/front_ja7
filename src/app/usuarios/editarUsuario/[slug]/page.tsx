import Form_update_user_page from '@/components/users/form_update/form_update_user_page/form_update_user_page';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Form_update_user_page slug={params.slug} />
    </>
  );
}
