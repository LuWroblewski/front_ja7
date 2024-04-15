import type { Metadata } from 'next';
import './globals.css';
import Provider from '@/components/session/session_provider/session_provider';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Pagina de Login do sistema de petições.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
