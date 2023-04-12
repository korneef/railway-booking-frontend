import classNames from 'classnames';
import { ToggleButton, MultiRangeSlider, ArrowLeft, ArrowRight, useFindTicketRequest } from '../../../shared';
import { useState, ChangeEventHandler } from 'react';

interface TimeClarificationProps {
  direction: 'departure' | 'arrival';
}

function TimeClarification(props: TimeClarificationProps) {
  const [isChecked, setIsChecked] = useState(false);
  const updateRequest = useFindTicketRequest()
  const { direction } = props;

  const handleClick: ChangeEventHandler<HTMLInputElement> = (): void => {
    setIsChecked(!isChecked);
  }

  const selectDepartureTime = (minTime: number = 0, maxTime: number = 24) => {
    switch (direction) {
      case 'departure':
        updateRequest('start_departure_hour_from', minTime);
        updateRequest('start_departure_hour_to', maxTime);
        break
      case 'arrival':
        updateRequest('end_departure_hour_from', minTime);
        updateRequest('end_departure_hour_to', maxTime);
        break
    }
  }

  const selectArrivalTime = (minTime: number = 0, maxTime: number = 24) => {
    switch (direction) {
      case 'departure':
        updateRequest('start_arrival_hour_from', minTime);
        updateRequest('start_arrival_hour_to', maxTime);
        break
      case 'arrival':
        updateRequest('end_arrival_hour_from', minTime);
        updateRequest('end_arrival_hour_to', maxTime);
        break
    }
  }

  const className = 'time-clarification';

  return (
    <>
      <div className={classNames(className + '__header-wrapper')}>
        <img src={direction === 'departure' ? ArrowRight : ArrowLeft}
          alt=""
          className={classNames(className + '__header-image')} />
        <h2
          className={classNames(className + '__header')}>{direction === 'departure' ? "Туда" : "Обратно"}
        </h2>
        <ToggleButton bemClass={className} handeClick={handleClick} checked={isChecked} />
      </div>
      {isChecked ? <>
        <div className={classNames(className + '__slider-wrapper')}>
          <div className={classNames(className + '__slider-header', className + '__slider-header_left')}>Время отбытия</div>
          <MultiRangeSlider bemClass={className} type='time' handleMouseUp={selectDepartureTime} />
        </div>
        <div className={classNames(className + '__slider-wrapper')}>
          <div className={classNames(className + '__slider-header', className + '__slider-header_right')}>Время прибытия</div>
          <MultiRangeSlider bemClass={className} type='time' handleMouseUp={selectArrivalTime}/>
        </div>
      </> : false}
    </>
  );
}

export default TimeClarification;