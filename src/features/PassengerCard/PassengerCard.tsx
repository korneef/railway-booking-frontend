import { Panel, ToggleButton } from "shared";
import { Button } from "shared";
import { ReactEventHandler, ChangeEvent, useState, useLayoutEffect, useRef } from "react";
import { useFormik } from "formik";
import classNames from "classnames";
import DatePicker from "react-datepicker";
import { IPersonInfo } from "app/store/orderSlices";
import initialValuesParser from "./helpers/initialValuesParser";
import { passportValidationSchema, birthdayCertificateValidationSchema } from "./validationSchemes";
import valuesToStoreParser from "./helpers/valuesToStoreParser";
import { useAppDispatch } from "app/store/hooks";
import { addNewPerson } from "app/store/orderSlices";
import { nanoid } from "nanoid";
import { SuccessfullyIcon, ErrorIcon } from "shared";

interface IProps {
  index: number,
  person: IPersonInfo | null,
  open: boolean;
  scroll: boolean;
  last: boolean;
}

function PassengerCard({ index, person, open, scroll, last }: IProps) {
  const [isChecked, setIsChecked] = useState(open);
  const [document, setDocument] = useState(person === null ? 'паспорт' : person.document_type);
  const [isSubmit, setIsSubmit] = useState(!!person);
  const dispatch = useAppDispatch();
  const headerRef = useRef<null | HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!scroll) return
    headerRef.current !== null && headerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
  });
  }, [scroll]);
  const formik = useFormik({
    initialValues: initialValuesParser(person),
    onSubmit: values => {
      setIsSubmit(true)
      dispatch(addNewPerson({ person: valuesToStoreParser(values), index }));
    },
    validationSchema: document === 'паспорт' ? passportValidationSchema : birthdayCertificateValidationSchema
  })

  const handleChangeValidationSchema = (e: ChangeEvent<HTMLSelectElement>) => {
    formik.handleChange(e);
    setDocument(e.target.value)
  }
  const handleClick: ReactEventHandler<HTMLInputElement> = (): void => {
    setIsChecked(check => !check)
  }
  const touched = formik.touched;
  const errors = formik.errors;

  const className = "passenger-card";
  const lableClass = `${className}__input-label`
  const inputClass = `${className}__input`
  return (
    <div className={className}>
      <Panel bemClass={className} variant='white'>
        <div ref={headerRef} className={`${className}__header`}>
          <ToggleButton bemClass={className} checked={isChecked} handeClick={handleClick} variant='circle' />
          <div className={`${className}__passenger-number`}>{`Пассажир ${index + 1}`}</div>
        </div>
        {isChecked ?
          <div className={`${className}__form-wrapper`} >
            <form onSubmit={formik.handleSubmit} className={`${className}__form`}>
              <section className={`${className}__personal-info-section`}>
                <select className={inputClass} id="is_adult" name="is_adult" value={formik.values.is_adult} onChange={formik.handleChange}>
                  <option value="true" defaultChecked>Взрослый</option>
                  <option value="false">Ребенок</option>
                </select>
                <div className={`${className}__fullname-wrapper`}>
                  <div>
                    <label htmlFor="last-name" className={lableClass}>Фамилия</label>
                    <input
                      className={classNames(inputClass, { [`${inputClass}_error`]: touched.last_name && errors.last_name })}
                      onBlur={() => formik.setFieldTouched('last_name')}
                      id="last-name"
                      name="last_name"
                      placeholder=""
                      value={formik.values.last_name}
                      onChange={formik.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="first_name" className={lableClass}>Имя</label>
                    <input
                      className={classNames(inputClass, { [`${inputClass}_error`]: touched.first_name && errors.first_name })}
                      onBlur={() => formik.setFieldTouched('first_name')}
                      id="first_name"
                      name="first_name"
                      placeholder=""
                      value={formik.values.first_name}
                      onChange={formik.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="firstname" className={lableClass}>Отчество</label>
                    <input
                      className={classNames(inputClass, { [`${inputClass}_error`]: touched.patronymic && errors.patronymic })}
                      onBlur={() => formik.setFieldTouched('patronymic')}
                      id="patronymic"
                      name="patronymic"
                      placeholder=""
                      value={formik.values.patronymic}
                      onChange={formik.handleChange} />
                  </div>
                </div>
                <div className={`${className}__personal-details-wrapper`}>
                  <div className={`${className}__gender-wrapper`}>
                    <div className={lableClass} id="my-radio-group">Пол</div>
                    <div role="group" aria-labelledby="my-radio-group" className={`${className}__radio-wrapper`}>
                      <label className={classNames(
                        `${className}__radio-label`,
                        `${className}__radio-label_left`,
                        { [`${className}__radio-label_active`]: (formik.values.gender === 'true') })} >
                        <input className={`${className}__radio-input`} type="radio" name="gender" value='true' defaultChecked onChange={formik.handleChange} /><div>М</div>
                      </label>
                      <label className={classNames(
                        `${className}__radio-label`,
                        `${className}__radio-label_right`,
                        { [`${className}__radio-label_active`]: (formik.values.gender === 'false') })} >
                        <input className={`${className}__radio-input`} type="radio" name="gender" value='false' onChange={formik.handleChange} /><div>Ж</div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="birthday" className={lableClass}>Дата рождения</label>
                    <DatePicker
                      selected={formik.getFieldMeta('birthday').value}
                      dateFormat="dd.MM.yyyy"
                      className={classNames(
                        inputClass,
                        `${inputClass}_date`,
                        { [`${inputClass}_error`]: touched.birthday && errors.birthday })}
                      onBlur={() => formik.setFieldTouched('birthday')}
                      id="birthday"
                      name="birthday"
                      onChange={(date: any) => formik.setFieldValue('birthday', date)} />
                  </div>
                </div>
              </section>

              <section className={`${className}__personal-info-section`}>
                <div className={`${className}__document-wrapper`}>
                  <div className={`${className}__document-input-wrapper`}>
                    <label className={lableClass} htmlFor="document_type">Тип документа</label>
                    <select
                      className={`${inputClass} ${inputClass}_document-select`}
                      id="document_type" name="document_type"
                      value={formik.values.document_type}
                      onChange={handleChangeValidationSchema} >
                      <option value="паспорт">Паспорт</option>
                      <option value="свидетельство о рождении" >Свидетельство о рождении</option>
                    </select>
                  </div>
                  {formik.values.document_type === 'паспорт' ?
                    <>
                      <div className={`${className}__document-input-wrapper`}>
                        <label htmlFor="document_serial" className={lableClass}>Серия</label>
                        <input
                          className={classNames(inputClass, { [`${inputClass}_error`]: touched.document_serial && errors.document_serial })}
                          type="text"
                          name='document_serial'
                          value={formik.values.document_serial}
                          onBlur={() => formik.setFieldTouched('document_serial')}
                          onChange={formik.handleChange} />
                      </div>
                      <div className={`${className}__document-input-wrapper`}>
                        <label htmlFor="document_number" className={lableClass}>Номер</label>
                        <input
                          className={classNames(inputClass, { [`${inputClass}_error`]: touched.document_number && errors.document_number })}
                          onBlur={() => formik.setFieldTouched('document_number')}
                          type="text"
                          name='document_number'
                          value={formik.values.document_number}
                          onChange={formik.handleChange} />
                      </div>
                    </> :
                    <>
                      <div className={`${className}__document-input-wrapper`}>
                        <label htmlFor="birthday_certificate" className={lableClass}>Номер</label>
                        <input
                          className={classNames(inputClass, { [`${inputClass}_error`]: touched.birthday_certificate && errors.birthday_certificate })}
                          onBlur={() => formik.setFieldTouched('birthday_certificate')}
                          type="text"
                          name='birthday_certificate'
                          value={formik.values.birthday_certificate}
                          onChange={formik.handleChange} />
                      </div>
                    </>
                  }
                </div>
              </section>
              {formik.submitCount > 0 && Object.values(formik.errors).length > 0
                ?
                <div className={`${className}__errors-field`}>
                  <div className={`${className}__errors-field-image`}><img src={ErrorIcon} alt="" /></div>
                  <div>{Object.values(formik.errors).map(item => <div key={nanoid()} className={`${className}__errors-item`}>{item}</div>)}</div>
                </div>
                :
                <div className={classNames(`${className}__button-wrapper`, { [`${className}__button-wrapper_successfully`]: isSubmit })}>
                  {isSubmit && <div className={`${className}__successfully-image-wrapper`}>
                    <img src={SuccessfullyIcon} className={`${className}__successfully-image`} alt="" />
                    <div className={`${className}__successfully-text`}>Готово</div>
                  </div>}
                  <Button variant='transparent' type='submit' className={className}>{last ? "Проверить" : "Следующий пассажир"}</Button>
                </div>}
            </form>
          </div> : null}
      </Panel >
    </div >
  );
}

export default PassengerCard;