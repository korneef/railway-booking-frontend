import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Имя слишком короткое')
    .max(50, 'Имя слишком длинное')
    .required('Заполните имя'),
  last_name: Yup.string()
    .min(2, 'Фамилия слишком короткая')
    .max(50, 'Фамилия слишком длинная')
    .required('Заполните фамилию'),
  patronymic: Yup.string()
    .min(2, 'Отчество слишком короткое')
    .max(50, 'Отчество слишкмо длинное')
    .required('Заполните отчество'),
  phone: Yup.string()
  .required()
  .matches(/^(?:\+7|8)\d{10}$/),
  email: Yup.string()
    .required('Заполните e-mail')
    .email('Невалидный e-mail'),
  payment_method: Yup.string()
    .matches(/^(cash|online)$/)
    .required(),
})