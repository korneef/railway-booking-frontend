import {
  ArrowLeft,
  ArrowRight,
  Button,
  Panel,
  TrainPath,
  TrainLogoSmall,
  OrangeClockIcon,
  getDuration,
  useWagonInformationRequest
} from '../../shared';
import { TrainTimeTableInfo, WagonTypeSelect } from '../../entities/index';
import classNames from 'classnames';
import { Coach, TicketsCountSelector } from '../../features'
import { unselectTicket } from '../../app/store/ticketsListSlices';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { cleanOrder } from 'app/store/orderSlices';

interface SeatsSelectionProps {
  direciton: 'departure' | 'arrival',
}

function SeatsSelection(props: SeatsSelectionProps) {
  const { direciton } = props;
  const ticketInfo = useAppSelector(state => state.tickets.selectedTicket);
  const ticket = direciton === 'departure' ? ticketInfo?.departure : ticketInfo?.arrival;

  const ticketId = ticket ? ticket._id : null;
  const [selectedWagonsIndex, setSelectedWagonsIndex] = useState<Array<number>>([0]);
  const [selectedWagonsTypes, setSelectedWagonsTypes] = useState<Array<string>>(() => {
    const wagonTypes: Array<string> = [];
    if (ticket === null || ticket === undefined) return wagonTypes;
    if (ticket.have_first_class) wagonTypes.push('first');
    if (ticket.have_second_class) wagonTypes.push('second');
    if (ticket.have_third_class) wagonTypes.push('third');
    if (ticket.have_fourth_class) wagonTypes.push('fourth');
    return wagonTypes;
  })
  
  const seatsAllInfo = useAppSelector(state => state.tickets.wagonInformation);
  const seatsInfo = direciton === 'departure' ? seatsAllInfo.departure : seatsAllInfo.arrival;
  const dispatch = useAppDispatch();
  const wagonInformationRequest = useWagonInformationRequest()

  useEffect(() => {
    wagonInformationRequest(direciton, ticketId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticketId])

  const handleSelectWagonType = (type: string): void => {
    const isSelected = selectedWagonsTypes.findIndex((item) => item === type);
    setSelectedWagonsTypes(prevValue => {
      const newValue = Array.from(prevValue);
      isSelected === -1 && newValue.push(type);
      isSelected !== -1 && newValue.splice(isSelected, 1);
      return newValue;
    })
  }

  const handleSelectWagonIndex = (index: number) => {
    const isSelected = selectedWagonsIndex.findIndex((item) => item === index);
    setSelectedWagonsIndex(prevValue => {
      const newValue = Array.from(prevValue);
      isSelected === -1 && newValue.push(index);
      isSelected !== -1 && newValue.splice(isSelected, 1);
      return newValue;
    })
  }

  if (ticket === null || ticket === undefined) return <></>

  const className = 'seats-selection';
  const wagonInfoClassName = 'train-wagons-information'
  const duration = getDuration(ticket.duration);

  return (
    <Panel variant='white' bemClass={className}>

      <div className={classNames(`${className}__train-choise`, { [`${className}__train-choise_${direciton}`]: direciton })}>
        <img src={direciton === 'departure' ? ArrowRight : ArrowLeft} alt="direction-arrow" className={`${className}__direction-arrow-image`}></img>
        <Button onClick={() => {
          dispatch(unselectTicket());
          dispatch(cleanOrder());
          }} className={className} variant='transparent' >Выбрать другой поезд</Button>
      </div>

      <div className={`${className}__train-schedule train-schedule`}>
        <div className="train-schedule__general-info">
          <div className="train-schedule__train-icon-wrapper"><img src={TrainLogoSmall} alt="Логотип поезда" /></div>
          <div>
            <div className="train-schedule__train-name">{ticket.train.name}</div>
            <TrainPath fromCity={ticket.from.city.name} toCity={ticket.to.city.name} />
          </div>
        </div>
        <TrainTimeTableInfo bemClass='train-schedule' direction={direciton} from={ticket.from} to={ticket.to} />
        <div className="train-schedule__duration">
          <div className="train-schedule__clock-icon-wrapper"><img src={OrangeClockIcon} alt="Часы" /></div>
          <div className="train-schedule__time-information-wrapper">
            <div>{`${duration.hours} ${duration.hoursName}`}</div>
            <div>{`${duration.minutes} ${duration.minutesName}`}</div>
          </div>
        </div>
      </div>

      <TicketsCountSelector bemClass={className}/>

      <div className="wagons-type">
        <h2 className="wagons-type__header">Тип вагона</h2>
        <div className="wagons-type__wrapper">
          {(ticket.have_first_class) && <WagonTypeSelect bemClass='wagons-type' type={1} active={selectedWagonsTypes.includes('first')} handleClick={() => handleSelectWagonType('first')} />}
          {(ticket.have_second_class) && <WagonTypeSelect bemClass='wagons-type' type={2} active={selectedWagonsTypes.includes('second')} handleClick={() => handleSelectWagonType('second')} />}
          {(ticket.have_third_class) && <WagonTypeSelect bemClass='wagons-type' type={3} active={selectedWagonsTypes.includes('third')} handleClick={() => handleSelectWagonType('third')} />}
          {(ticket.have_fourth_class) && <WagonTypeSelect bemClass='wagons-type' type={4} active={selectedWagonsTypes.includes('fourth')} handleClick={() => handleSelectWagonType('fourth')} />}
        </div>
      </div>

      {seatsInfo ? <>
        <div className={wagonInfoClassName}>
          <div className={`${wagonInfoClassName}__select-wagon-section`}>
            <div className={`${wagonInfoClassName}__wagons-numbers-header`}>Вагоны</div>
            <div className={`${wagonInfoClassName}__wagons-numbers`}>
              {seatsInfo.map((item, index) => {
                if (!selectedWagonsTypes.includes(item.coach.class_type)) return null;
                return (<div
                  key={item.coach._id}
                  className={classNames(`${wagonInfoClassName}__wagon-number`, { [`${wagonInfoClassName}__wagon-number_active`]: selectedWagonsIndex.includes(index) })}
                  onClick={() => handleSelectWagonIndex(index)}>
                  {index + 1}
                </div>)
              })}
            </div>
          </div>
        </div>
        {seatsInfo.map((item, index) => {
          if (!selectedWagonsTypes.includes(item.coach.class_type) || !selectedWagonsIndex.includes(index)) return null;
          return <div key={nanoid()}>
            <Coach index={index} direction={direciton} />
          </div>
        })}
      </> : 'loading'
      }
    </Panel>
  );
}

export default SeatsSelection;