import Form_del_petition_page from '@/components/petitions/form_del/form_del_petition_page/form_del_petition_page';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Form_del_petition_page slug={params.slug} />
    </>
  );
}
