import * as Yup from 'yup';

export const passportValidationSchema = Yup.object().shape({
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
  gender: Yup.boolean(),
  birthday: Yup.date().nullable().min(new Date(1900, 0, 1)).required('Заполните дату рождения'),
  document_type: Yup.string().required(),
  document_serial: Yup.string()
    .matches(/^\d{4}$/, 'Серия документа должна состоять из 4х цифр')
    .required('Заполните серию документа'),
  document_number: Yup.string()
  .matches(/^\d{6}$/, 'Номер документа должна состоять из 6 цифр')
  .required('Заполните серию и номер документа'),
})

export const birthdayCertificateValidationSchema = Yup.object().shape({
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
  gender: Yup.boolean(),
  birthday: Yup.date().nullable().min(new Date(1900, 0, 1)).required('Заполните дату рождения'),
  document_type: Yup.string().required(),
  birthday_certificate: Yup.string()
  .matches(/^[IVX]{2}-?[А-Я]{2}-?\d{6}$/, 'Номер свидетельства о рождении должен иметь формат XV-АА-123456')
  .required('Заполните номер свидетельства о рождении')
})