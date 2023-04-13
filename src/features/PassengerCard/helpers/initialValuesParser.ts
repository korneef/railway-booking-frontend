import { IPersonInfo } from "app/store/orderSlices";

export interface IInitialValues {
    is_adult: string,
    first_name: string,
    last_name: string,
    patronymic: string,
    gender: string,
    birthday: Date | string,
    document_type: string,
    document_serial: string,
    document_number: string,
    birthday_certificate: string
}

export default function initialValuesParser(person: IPersonInfo | null) {
  const initialValues: IInitialValues = {
    is_adult: 'true',
    first_name: '',
    last_name: '',
    patronymic: '',
    gender: 'true',
    birthday: '',
    document_type: 'паспорт',
    document_serial: '',
    document_number: '',
    birthday_certificate: ''
  }
  if (person === null) return initialValues;
  const birthday = person.birthday.split('.');
  const birthdayDate = new Date(`${birthday[2]}-${birthday[1]}-${birthday[0]}`);

  initialValues.is_adult = String(person.is_adult);
  initialValues.first_name = person.first_name;
  initialValues.last_name = person.last_name;
  initialValues.patronymic = person.patronymic;
  initialValues.gender = String(person.gender);
  initialValues.birthday = birthdayDate;
  initialValues.document_type = person.document_type;
  if (person.document_type === 'паспорт') {
    initialValues.document_serial = person.document_data.slice(0,4);
    initialValues.document_number = person.document_data.slice(4);
  } else {
    initialValues.birthday_certificate = person.document_data;
  }
  return initialValues;
}