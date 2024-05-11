import Footer from '@/components/mains/footer/footer';
import Menu from '@/components/mains/menu/menu';
import Session_auth from '@/components/session/session_auth/session_auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painel de Petições',
  description: 'Pagina de petições do sistema.',
};
export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Menu />

      {props.children}

      <Session_auth />
      <Footer />
    </>
  );
}
