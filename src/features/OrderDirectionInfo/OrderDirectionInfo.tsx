import {
  ArrowLeft,
  ArrowRight,
  ToggleButton,
  TrainDirection,
  toUpperCaseFirst
} from 'shared';
import classNames from 'classnames';
import { ITrainInformation } from 'entities';
import { ReactEventHandler, useState } from 'react';
import moment from 'moment';

interface IProps {
  direction: 'arrival' | 'departure';
  ticket: ITrainInformation;
}

function OrderDirectionInfo({ direction, ticket }: IProps) {
  const [isChecked, setIsChecked] = useState(true);
  const departureDate = moment(ticket.from.datetime * 1000).format('DD.MM.YYYY');
  const handleClick: ReactEventHandler<HTMLInputElement> = (): void => {
    setIsChecked(!isChecked);
  }

  const className = 'order-direction-info'
  return (
    <>
      <div className={`${className}__header-wrapper`}>
        <img src={direction === 'departure' ? ArrowRight : ArrowLeft}
          alt=""
          className={`${className}__header-image`} />
        <h2
          className={`${className}__header`}>{direction === 'departure' ? "Туда" : "Обратно"}
        </h2>
        <span className={`${className}__header-departure-date`}>{departureDate}</span>
        <ToggleButton bemClass={className} handeClick={handleClick} checked={isChecked}/>
      </div>
      {isChecked ? <>
        <div className={classNames(className + '__slider-wrapper')}>
          <div className={`${className}__train-general-info-wrapper`}>
            <div className={`${className}__train-general-info-header`}>№ поезда</div>
            <div className={`${className}__train-general-info`}>{ticket.train.name}</div>
          </div>
          <div className={`${className}__train-general-info-wrapper`}>
            <div className={`${className}__train-general-info-header`}>Название</div>
            <div className={`${className}__train-general-info-city-wrapper`}>
              <div className={`${className}__train-city-name`}>{toUpperCaseFirst(ticket.from.city.name)}</div>
              <div className={`${className}__train-city-name`}>{toUpperCaseFirst(ticket.to.city.name)}</div>
            </div>
          </div>
          <div className={`${className}__time-info`}>
            <div className={`${className}__time-section-wrapper`}>
              <div className={`${className}__time`}>{moment(ticket.from.datetime * 1000).format('hh:mm')}</div>
              <div className={`${className}__date`}>{moment(ticket.from.datetime * 1000).format('DD.MM.YYYY')}</div>
            </div>
            <TrainDirection bemClass={className} duration={ticket.duration} direciton={direction} />
            <div className={`${className}__time-section-wrapper ${className}__time-section-wrapper_right`}>
              <div className={`${className}__time`}>{moment(ticket.to.datetime * 1000).format('hh:mm')}</div>
              <div className={`${className}__date`}>{moment(ticket.to.datetime * 1000).format('DD.MM.YYYY')}</div>
            </div>
          </div>
          <div className={`${className}__city-info`}>
            <div className={`${className}__city-info-wrapper`}>
              <div className={`${className}__city-name`}>{toUpperCaseFirst(ticket.from.city.name)}</div>
              <div className={`${className}__railway-station-name`}>{toUpperCaseFirst(ticket.from.railway_station_name)}</div>
            </div>
            <div className={`${className}__city-info-wrapper ${className}__city-info-wrapper_right`}>
              <div className={`${className}__city-name`}>{toUpperCaseFirst(ticket.to.city.name)}</div>
              <div className={`${className}__railway-station-name`}>{toUpperCaseFirst(ticket.to.railway_station_name)}</div>
            </div>

          </div>
        </div>
      </> : false}
    </>
  );
}

export default OrderDirectionInfo;