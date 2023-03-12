import {
  ArrowLeft,
  ArrowRight,
  Button,
  Panel,
  TrainPath,
  TrainLogoSmall,
  OrangeClockIcon,
  getDuration,
  InputWithLabelOnInput,
} from 'shared';
import { TrainTimeTableInfo, WagonTypeSelect } from 'entities/index';
import { Coach } from 'features';
import classNames from 'classnames';

interface SeatsSelectionProps {
  direciton: 'departure' | 'arrival',
  ticket: any;
}

function SeatsSelection(props: SeatsSelectionProps) {
  const { direciton, ticket } = props;
  const className = 'seats-selection';
  const duration = getDuration(ticket.duration);

  console.log(ticket)

  return (
    <Panel bemClass={className}>

      <div className={classNames(`${className}__train-choise`, { [`${className}__train-choise_${direciton}`]: direciton })}>
        <img src={direciton === 'departure' ? ArrowRight : ArrowLeft} alt="direction-arrow" className={`${className}__direction-arrow-image`}></img>
        <Button className={className} variant='transparent' >Выбрать другой поезд</Button>
      </div>

      <div className={`${className}__train-schedule train-schedule`}>
        <div className="train-schedule__general-info">
          <div className="train-schedule__train-icon-wrapper"><img src={TrainLogoSmall} alt="Логотип поезда" /></div>
          <div>
            <div className="train-schedule__train-name">{ticket.train.name}</div>
            <TrainPath fromCity={ticket.from.city.name} toCity={ticket.to.city.name} />
          </div>
        </div>
        <TrainTimeTableInfo bemClass='train-schedule' direction='departure' from={ticket.from} to={ticket.to} />
        <div className="train-schedule__duration">
          <div className="train-schedule__clock-icon-wrapper"><img src={OrangeClockIcon} alt="Часы" /></div>
          <div className="train-schedule__time-information-wrapper">
            <div>{`${duration.hours} ${duration.hoursName}`}</div>
            <div>{`${duration.minutes} ${duration.minutesName}`}</div>
          </div>
        </div>
      </div>

      <div className={`${className}__tickets-count tickets-count`}>
        <h2 className={`${className}__section-header tickets-count__header`}>Количество билетов</h2>
        <div className="tickets-count__section-wrapper">
          <div className='tickets-count__section'>
            <InputWithLabelOnInput label='Взрослых —' />
            <div className='tickets-count__section-description'>Можно добавить еще 3 пассажиров</div>
          </div>
          <div className='tickets-count__section'>
            <InputWithLabelOnInput label='Детских —' />
            <div className='tickets-count__section-description tickets-count__section-description_children'>
              Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
              в среднем на 50-65%
            </div>
          </div>
          <div className='tickets-count__section'>
            <InputWithLabelOnInput label='Детских «без места» —' />
          </div>
        </div>
      </div>

      <div className="wagons-type">
        <h2 className="wagons-type__header">Тип вагона</h2>
        <div className="wagons-type__wrapper">
          {(ticket.have_first_class) && <WagonTypeSelect bemClass='wagons-type' type={1} active={true} />}
          {(ticket.have_second_class) && <WagonTypeSelect bemClass='wagons-type' type={2} active={false} />}
          {(ticket.have_third_class) && <WagonTypeSelect bemClass='wagons-type' type={3} active={false} />}
          {(ticket.have_fourth_class) && <WagonTypeSelect bemClass='wagons-type' type={4} active={false} />}
        </div>
      </div>

      <div className="train-wagons-information">
        <div className='train-wagons-information__select-wagon-section'>
          <div className="train-wagons-information__wagons-numbers-header">Вагоны</div>
          <div className="train-wagons-information__wagons-numbers">
            <div className='train-wagons-information__wagon-number'>01</div>
            <div className='train-wagons-information__wagon-number train-wagons-information__wagon-number_active'>02</div>
            <div className='train-wagons-information__wagon-number'>05</div>
            <div className='train-wagons-information__wagon-number'>06</div>
            <div className='train-wagons-information__wagon-number'>09</div>
          </div>
        </div>
      </div>
      <Coach/>
    </Panel>
  );
}


export default SeatsSelection;