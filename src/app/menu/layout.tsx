import Footer from '@/components/mains/footer/footer';
import Menu from '@/components/mains/menu/menu';
import Session_auth from '@/components/session/session_auth/session_auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Pagina de Menu do sistema de petições.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      {children}
      <Session_auth />
      <Footer />
    </>
  );
}
