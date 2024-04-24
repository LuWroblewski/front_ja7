import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adicionar Usuário.',
  description: 'Pagina para adicionar um usuário no sistema.',
};
export default function Layout(props: { children: React.ReactNode }) {
  return <>{props.children}</>;
}
