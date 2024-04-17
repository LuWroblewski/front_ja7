import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const user_notify_sucess = () => toast.success('Login feito com sucesso.');
export const user_notify_error = () => toast.error('Autenticação falhou, tente novamente.');

export const create_notify_sucess = () => toast.success('Usuário criado com sucesso.');
export const create_notify_error = () => toast.error('Criação do usuário falhou, tente novamente.');
