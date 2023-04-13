import { IInitialValues } from "./initialValuesParser";
import { IPersonInfo } from "app/store/orderSlices";
import moment from "moment";

export default function valuesToStoreParser(values: IInitialValues): IPersonInfo {
  let {
    is_adult,
    gender,
    birthday,
    document_serial,
    document_number,
    birthday_certificate,
    ...person } = values;

    let document_data: string;
    if (values.document_type === 'паспорт') {
      document_data = document_serial + document_number;
    } else {
      document_data = birthday_certificate;
    }
    const birthdayDate = moment(birthday).format('DD.MM.YYYY');

    const fullPerson = Object.assign(person, {
      is_adult: is_adult === 'true' ? true : false,
      gender: gender === 'true' ? true : false,
      birthday: birthdayDate,
      document_data: document_data
    })
    return fullPerson;
}