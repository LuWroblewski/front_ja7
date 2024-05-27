import Modal_del_petition from '@/components/petitions/form_del/modal_del_petition/modal_del_petition';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Modal_del_petition slug={params.slug} />
    </>
  );
}
