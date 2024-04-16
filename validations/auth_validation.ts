import * as yup from 'yup';

const auth_schema = yup.object().shape({
  email: yup.string().email('Esse não é um email valido.').required('Email é obrigatório.').strict(true).trim(),
  password: yup.string().required('Senha é obrigatório.').strict(true).trim(),
});

export { auth_schema };
