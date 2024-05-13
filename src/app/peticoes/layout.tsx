import Footer from '@/components/mains/footer/footer';
import Menu from '@/components/mains/menu/menu';
import Session_auth from '@/components/session/session_auth/session_auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painel de Petições',
  description: 'Pagina de petições do sistema.',
};
export default function Layout(props: {
  children: React.ReactNode;
  adicionarPeticao: React.ReactNode;
  editarPeticao: React.ReactNode;
  deletarPeticao: React.ReactNode;
  visualizarPeticao: React.ReactNode;
}) {
  return (
    <>
      <Menu />

      {props.adicionarPeticao}
      {props.editarPeticao}
      {props.deletarPeticao}
      {props.visualizarPeticao}

      {props.children}

      <Session_auth />
      <Footer />
    </>
  );
}
