import { Panel, ToggleButton } from "shared";
import { ReactEventHandler, useState } from "react";
import { Formik, Form, FormikHelpers, Field } from "formik";
import classNames from "classnames";

interface Values {
  is_adult: boolean,
  first_name: string,
  last_name: string,
  patronymic: string,
  gender: boolean,
  birthday: string,
  document_type: 'паспорт' | 'свидетельсво о рождении',
  document_data: string
}

function PassengerCard() {
  const [isChecked, setIsChecked] = useState(false)
  const handleClick: ReactEventHandler<HTMLInputElement> = (): void => {
    setIsChecked(check => !check)
  }
  const isAdult = true;
  const documentType = isAdult ? 'паспорт' : 'свидетельсво о рождении'

  const className = "passenger-card"
  return (
    <div className={className}>
      <Panel bemClass={className} variant='white'>
        <div className={`${className}__header`}>
          <ToggleButton bemClass={className} checked={isChecked} handeClick={handleClick} variant='circle' />
          <div className={`${className}__passenger-number`}>Пассажир 1</div>
        </div>
        <div>
          <Formik
            initialValues={{
              is_adult: true,
              first_name: '',
              last_name: '',
              patronymic: '',
              gender: true,
              birthday: '',
              document_type: documentType,
              document_data: ''
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
              <Field
                id="isAdult"
                name="isAdult"
                as="select"
              >
                <option value="red">Взрослый</option>
                <option value="green">Ребенок</option>
              </Field>


              <label htmlFor="lastName">Фамилия</label>
              <Field id="lastName" name="lastName" placeholder="" className='' />
              <label htmlFor="lastName">Имя</label>
              <Field id="firstname" name="firstname" placeholder="" />
              <label htmlFor="firstname">Отчество</label>
              <Field id="patronymic" name="patronymic" placeholder="" />

              <div id="my-radio-group">Пол</div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="picked" value="One" />
                  М
                </label>
                <label>
                  <Field type="radio" name="picked" value="Two" />
                  Ж
                </label>
              </div>

              <label htmlFor="firstname">Отчество</label>
              <Field type='date' id="patronymic" name="patronymic" placeholder="" />

              <label>
                <Field type="checkbox" name="toggle" />
                ограниченная подвижность
              </label>

              <Field
                id="document-type"
                name="document-type"
                as="select"
              >
                <option value="red">Паспорт</option>
                <option value="green" >Свидетельство о рождении</option>
              </Field>
            </Form>
          </Formik>
        </div>
      </Panel >

    </div >
  );
}

export default PassengerCard;