import * as yup from 'yup';

const petition_schema = yup.object().shape({
  title: yup.string().required('Nome é obrigatório').strict(true).trim(),
  description: yup.string().required('Sobrenome é obrigatório').strict(true).trim(),
  type: yup.string().required('Sobrenome é obrigatório').strict(true).trim(),
  theme: yup.string().required('Sobrenome é obrigatório').strict(true).trim(),
});

export { petition_schema };
