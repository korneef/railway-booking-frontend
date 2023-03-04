import arrowLeft from './icons/arrow-left.svg';
import arrowRight from './icons/arrow-right.svg';
import classNames from 'classnames';
import { ToggleButton, MultiRangeSlider } from 'shared';
import { useState, ChangeEventHandler } from 'react';

interface TimeClarificationProps {
  direction: string;
  filterNameAlign: 'left' | 'right';
}

function TimeClarification(props: TimeClarificationProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { direction, filterNameAlign } = props;

  const handleClick: ChangeEventHandler<HTMLInputElement> = (): void => {
    setIsChecked(!isChecked);
  }
  const className = 'time-clarification';

  return (
    <>
      <div className={classNames(className + '__header-wrapper')}>
        <img src={filterNameAlign === 'left' ? arrowLeft : arrowRight}
          alt=""
          className={classNames(className + '__header-image')} />
        <h2
          className={classNames(className + '__header')}>{direction}
        </h2>
        <ToggleButton bemClass={className} handeClick={handleClick} />
      </div>
      {isChecked ? <>
        <div className={classNames(className + '__slider-wrapper')}>
          <div className={classNames(className + '__slider-header', className + '__slider-header_left')}>Время отбытия</div>
          <MultiRangeSlider bemClass={className} type='time' min={0} max={24} />
        </div>
        <div className={classNames(className + '__slider-wrapper')}>
          <div className={classNames(className + '__slider-header', className + '__slider-header_right')}>Время прибытия</div>
          <MultiRangeSlider bemClass={className} type='time' min={0} max={24} />
        </div>
      </> : false}


    </>
  );
}

export default TimeClarification;