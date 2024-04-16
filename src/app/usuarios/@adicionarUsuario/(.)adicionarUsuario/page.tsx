import Modal_add_user from '@/components/users/modal_add_user/modal_add_user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySucessUser = () => toast.success('Usuário criado com sucesso.');
export const notifyErrorUser = () => toast.error('Criação do usuário falhou, tente novamente.');

export default function Page() {
  return (
    <>
      <Modal_add_user />

      <ToastContainer position='top-right' autoClose={3000} theme='colored' />
    </>
  );
}