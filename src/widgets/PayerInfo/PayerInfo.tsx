import { Panel } from "shared";
import { useFormik } from "formik";
import classNames from "classnames";
import { validationSchema } from "./validationSchema";
import { Button } from "shared";
import { useNavigate } from "react-router-dom";
import { addUser } from "app/store/orderSlices";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { IUser } from "app/store/orderSlices";


//TODO вынести input в одтельный компонент
function PayerInfo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.order.preOrder.user);
  const initialValues: IUser = {
    first_name: '',
    last_name: '',
    patronymic: '',
    phone: '',
    email: '',
    payment_method: 'online'
  };
  
  const formik = useFormik({
    initialValues: user !== null ? user : initialValues,
    onSubmit: values => {
      dispatch(addUser(values))
    },
    validationSchema: validationSchema,
  })
  
  const className = 'payer-info';
  const lableClass = `${className}__label`;
  const inputClass = `${className}__input`;
  const touched = formik.touched;
  const errors = formik.errors;

  const handleClick = () => {
    formik.handleSubmit();
    navigate('/order/step/4');
  }
  return (
    <div>
      <div className={className}>
        <Panel variant='white' bemClass={className}>
          <h2 className={`${className}__header`}>Персональные данные</h2>
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
          <div className={`${className}__contacts-wrapper`}>
            <div className={`${className}__phone-wrapper`}>
              <label htmlFor="phone" className={lableClass}>Телефон</label>
              <input
                className={classNames(inputClass, { [`${inputClass}_error`]: touched.phone && errors.phone })}
                onBlur={() => formik.setFieldTouched('phone')}
                id="phone"
                name="phone"
                placeholder="+7 999 999 99 99"
                value={formik.values.phone}
                onChange={formik.handleChange} />
            </div>
            <div >
              <label htmlFor="email" className={lableClass}>E-mail</label>
              <input
                className={classNames(inputClass, { [`${inputClass}_error`]: touched.email && errors.email })}
                onBlur={() => formik.setFieldTouched('email')}
                id="email"
                name="email"
                placeholder="inbox@gmail.ru"
                value={formik.values.email}
                onChange={formik.handleChange} />
            </div>
          </div>
          <h2 className={`${className}__header`}>Способ оплаты</h2>

          <div className={`${className}__payment-method-online`}>
            <input
              className={`${className}__radio-button-input`}
              type="radio"
              id='payment-method-online'
              name='payment_method'
              value='online'
              checked={formik.values.payment_method === 'online'}
              onChange={formik.handleChange} />
            <label
              className={`${className}__radio-button-label`}
              htmlFor="payment-method-online">Онлайн</label>
            <ul className={`${className}__online-payment-list`}>
              <li className={`${className}__online-payment-item`}>Банковской картой</li>
              <li className={`${className}__online-payment-item`}>PayPal</li>
              <li className={`${className}__online-payment-item`}>Visa QIWI Wallet</li>
            </ul>
          </div>
          <div className={`${className}__payment-method-chash`}>
            <input
              className={`${className}__radio-button-input`}
              type="radio"
              id='payment-method-cash'
              name='payment_method'
              value='cash'
              checked={formik.values.payment_method === 'cash'}
              onChange={formik.handleChange} />
            <label
              className={`${className}__radio-button-label`}
              htmlFor="payment-method-cash">Наличными</label>
          </div>
        </Panel>
      </div>
      <div className={`order-step__button-wrapper`}>
        <Button
          variant='standart'
          className={`order-step`}
          disabled={!formik.isValid}
          onClick={handleClick}>Купить билеты</Button>
      </div>
    </div>
  );
}

export default PayerInfo;