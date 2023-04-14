import { IPersonInfo } from 'app/store/orderSlices';
import { UserIcon } from 'shared';
import classNames from 'classnames';

interface IProps {
  passenger: IPersonInfo,
  bemClass?: string,
}

function PassengerCard({passenger, bemClass}: IProps) {
    const { first_name, last_name, patronymic, birthday, document_type, document_data, is_adult, gender } = passenger;
    const className = 'passenger-summary-card';
    function capitalizeFirstLetter(str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
      <div className={classNames(className, {[`${bemClass}__${className}`]: bemClass})}>
        <div className={`${className}__icon-wrapper`}>
          <img src={UserIcon} alt="user-icon" className={`${className}__icon`}/>
          <div className={`${className}__age-name`}>{is_adult ? 'Взрослый' : 'Детский'}</div>
        </div>
        <div className={`${className}__passenger-summary`}>
          <div className={`${className}__fullname`}>{`${last_name} ${first_name} ${patronymic}`}</div>
          <div className={`${className}__other-info`}>Пол: {gender ? 'Мужской' : 'Женский'}</div>
          <div className={`${className}__other-info`}>Дата рождения: {birthday}</div>
          <div className={`${className}__other-info`}>{`${capitalizeFirstLetter(document_type)}: ${document_data}`}</div>
        </div>
      </div>
    );
  }

export default PassengerCard;