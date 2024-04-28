import Form_view_user_page from '@/components/users/form_view_user/form_view_user_page/form_view_user_page';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Form_view_user_page slug={params.slug} />
    </>
  );
}
