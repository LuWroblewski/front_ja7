import Footer from '@/components/mains/footer/footer';
import Menu from '@/components/mains/menu/menu';
import Session_auth from '@/components/session/session_auth/session_auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painel de Usuarios',
  description: 'Pagina de controle de usuarios do sistema de petições.',
};
export default function Layout(props: { children: React.ReactNode; adicionarUsuario: React.ReactNode }) {
  return (
    <>
      <Menu />

      {props.adicionarUsuario}

      {props.children}

      <Session_auth />
      <Footer />
    </>
  );
}
