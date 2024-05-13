import Modal_view_petition from '@/components/petitions/form_view_petition/modal_view_petition/modal_view_petition';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Modal_view_petition slug={params.slug} />
    </>
  );
}
