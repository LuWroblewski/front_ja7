import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const user_notify_sucess = () => toast.success('Login feito com sucesso.');
export const user_notify_error = () => toast.error('Autenticação falhou, tente novamente.');

export const notify_info = (text: string) => toast.info(text);

export const user_crud_notify_sucess = (text: string) => toast.success(text);
export const user_crud_notify_error = (text: string) => toast.error(text);

//texto base para crud de usuarios
//('Usuário criado com sucesso.');
//('Criação do usuário falhou, tente novamente.');
