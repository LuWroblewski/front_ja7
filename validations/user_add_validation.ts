import * as yup from 'yup';

const user_schema = yup.object().shape({
  first_name: yup.string().required('Nome é obrigatório').strict(true).trim(),
  last_name: yup.string().required('Sobrenome é obrigatório').strict(true).trim(),
  email: yup.string().email('Esse não é um email valido').required('Email é obrigatório').strict(true).trim(),
  password: yup
    .string()
    .required('Senha é obrigatório')
    .strict(true)
    .trim()
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Senha deve conter caracteres especiais')
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(1000, 'Senha não deve ter mais que 50 caracteres'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas precisam ser iguais')
    .required('Confirmação de senha é obrigatória')
    .strict(true)
    .trim(),
  role: yup.string().required('Cargo é obrigatório').strict(true).trim(),
});

export { user_schema };
