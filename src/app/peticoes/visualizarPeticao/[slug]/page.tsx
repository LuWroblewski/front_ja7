import Form_view_petition_page from '@/components/petitions/form_view_petition/form_view_petition_page/form_view_petition_page';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Form_view_petition_page slug={params.slug} />
    </>
  );
}
