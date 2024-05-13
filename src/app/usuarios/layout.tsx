import Footer from '@/components/mains/footer/footer';
import Menu from '@/components/mains/menu/menu';
import Session_auth from '@/components/session/session_auth/session_auth';
import Session_auth_admin from '@/components/session/session_auth_admin/session_auth_admin';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painel de Usuarios',
  description: 'Pagina de controle de usuarios do sistema de petições.',
};
export default function Layout(props: {
  children: React.ReactNode;
  adicionarUsuario: React.ReactNode;
  editarUsuario: React.ReactNode;
  deletarUsuario: React.ReactNode;
  visualizarUsuario: React.ReactNode;
}) {
  return (
    <>
      <Menu />

      {props.adicionarUsuario}
      {props.editarUsuario}
      {props.deletarUsuario}
      {props.visualizarUsuario}

      {props.children}

      <Session_auth />
      <Session_auth_admin />

      <Footer />
    </>
  );
}
