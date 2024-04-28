import Form_del_user_page from '@/components/users/form_del/form_del_user_page/form_del_user_page';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Form_del_user_page slug={params.slug} />
    </>
  );
}
