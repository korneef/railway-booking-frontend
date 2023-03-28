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
import { Coach, FirstClassCoachMap, SecondClassCoachMap, ThirdClassCoachMap, FourthClassCoachMap } from 'features';
import classNames from 'classnames';

interface SeatsSelectionProps {
  direciton: 'departure' | 'arrival',
  ticket: any;
}

function SeatsSelection(props: SeatsSelectionProps) {
  const { direciton, ticket } = props;
  const className = 'seats-selection';
  const duration = getDuration(ticket.duration);

  const seatsInfo = [
    {
      "coach": {
        "_id": "63329d7d591d1e00467e8db7",
        "name": "БЙГИТЗ-42",
        "class_type": 'first',
        "have_wifi": true,
        "have_air_conditioning": true,
        "price": 3220,
        "top_price": 3455,
        "bottom_price": 3160,
        "side_price": 0,
        "linens_price": 216,
        "wifi_price": 248,
        "is_linens_included": true,
        "available_seats": 6,
        "train": "63329d80591d1e00467e941a"
      },
      "seats": [
        {
          "index": 1,
          "available": true
        },
        {
          "index": 2,
          "available": true
        },
        {
          "index": 3,
          "available": true
        },
        {
          "index": 4,
          "available": true
        },
        {
          "index": 5,
          "available": true
        },
        {
          "index": 6,
          "available": true
        }
      ]
    },
    {
      "coach": {
        "_id": "63329d7d591d1e00467e8db8",
        "name": "ИМЙДК-41",
        "class_type": "third",
        "have_wifi": true,
        "have_air_conditioning": false,
        "price": 0,
        "top_price": 3635,
        "bottom_price": 2650,
        "side_price": 4505,
        "linens_price": 134,
        "wifi_price": 65,
        "is_linens_included": false,
        "available_seats": 36,
        "train": "63329d80591d1e00467e941a"
      },
      "seats": [
        {
          "index": 1,
          "available": true
        },
        {
          "index": 2,
          "available": true
        },
        {
          "index": 3,
          "available": true
        },
        {
          "index": 4,
          "available": true
        },
        {
          "index": 5,
          "available": true
        },
        {
          "index": 6,
          "available": true
        },
        {
          "index": 7,
          "available": true
        },
        {
          "index": 8,
          "available": true
        },
        {
          "index": 9,
          "available": true
        },
        {
          "index": 10,
          "available": true
        },
        {
          "index": 11,
          "available": true
        },
        {
          "index": 12,
          "available": true
        },
        {
          "index": 13,
          "available": true
        },
        {
          "index": 14,
          "available": true
        },
        {
          "index": 15,
          "available": true
        },
        {
          "index": 16,
          "available": true
        },
        {
          "index": 17,
          "available": true
        },
        {
          "index": 18,
          "available": true
        },
        {
          "index": 19,
          "available": true
        },
        {
          "index": 20,
          "available": true
        },
        {
          "index": 21,
          "available": true
        },
        {
          "index": 22,
          "available": true
        },
        {
          "index": 23,
          "available": true
        },
        {
          "index": 24,
          "available": true
        },
        {
          "index": 25,
          "available": true
        },
        {
          "index": 26,
          "available": true
        },
        {
          "index": 27,
          "available": true
        },
        {
          "index": 28,
          "available": true
        },
        {
          "index": 29,
          "available": true
        },
        {
          "index": 30,
          "available": true
        },
        {
          "index": 31,
          "available": true
        },
        {
          "index": 32,
          "available": true
        },
        {
          "index": 33,
          "available": true
        },
        {
          "index": 34,
          "available": true
        },
        {
          "index": 35,
          "available": true
        },
        {
          "index": 36,
          "available": true
        }
      ]
    },
    {
      "coach": {
        "_id": "63329d7d591d1e00467e8db9",
        "name": "СИК-41",
        "class_type": "fourth",
        "have_wifi": false,
        "have_air_conditioning": false,
        "price": 0,
        "top_price": 984,
        "bottom_price": 577,
        "side_price": 0,
        "linens_price": 0,
        "wifi_price": 262,
        "is_linens_included": false,
        "available_seats": 50,
        "train": "63329d80591d1e00467e941a"
      },
      "seats": [
        {
          "index": 1,
          "available": true
        },
        {
          "index": 2,
          "available": true
        },
        {
          "index": 3,
          "available": true
        },
        {
          "index": 4,
          "available": true
        },
        {
          "index": 5,
          "available": true
        },
        {
          "index": 6,
          "available": true
        },
        {
          "index": 7,
          "available": true
        },
        {
          "index": 8,
          "available": true
        },
        {
          "index": 9,
          "available": true
        },
        {
          "index": 10,
          "available": true
        },
        {
          "index": 11,
          "available": true
        },
        {
          "index": 12,
          "available": true
        },
        {
          "index": 13,
          "available": true
        },
        {
          "index": 14,
          "available": true
        },
        {
          "index": 15,
          "available": true
        },
        {
          "index": 16,
          "available": true
        },
        {
          "index": 17,
          "available": true
        },
        {
          "index": 18,
          "available": true
        },
        {
          "index": 19,
          "available": true
        },
        {
          "index": 20,
          "available": true
        },
        {
          "index": 21,
          "available": true
        },
        {
          "index": 22,
          "available": true
        },
        {
          "index": 23,
          "available": true
        },
        {
          "index": 24,
          "available": true
        },
        {
          "index": 25,
          "available": true
        },
        {
          "index": 26,
          "available": true
        },
        {
          "index": 27,
          "available": true
        },
        {
          "index": 28,
          "available": true
        },
        {
          "index": 29,
          "available": true
        },
        {
          "index": 30,
          "available": true
        },
        {
          "index": 31,
          "available": true
        },
        {
          "index": 32,
          "available": true
        },
        {
          "index": 33,
          "available": true
        },
        {
          "index": 34,
          "available": true
        },
        {
          "index": 35,
          "available": true
        },
        {
          "index": 36,
          "available": true
        },
        {
          "index": 37,
          "available": true
        },
        {
          "index": 38,
          "available": true
        },
        {
          "index": 39,
          "available": true
        },
        {
          "index": 40,
          "available": true
        },
        {
          "index": 41,
          "available": true
        },
        {
          "index": 42,
          "available": true
        },
        {
          "index": 43,
          "available": true
        },
        {
          "index": 44,
          "available": true
        },
        {
          "index": 45,
          "available": true
        },
        {
          "index": 46,
          "available": true
        },
        {
          "index": 47,
          "available": true
        },
        {
          "index": 48,
          "available": true
        },
        {
          "index": 49,
          "available": true
        },
        {
          "index": 50,
          "available": true
        }
      ]
    }
  ]

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
      <Coach coach={seatsInfo[0].coach} seats={seatsInfo[0].seats} />
      <FirstClassCoachMap vacancySeats={seatsInfo[2].seats}/>
      <SecondClassCoachMap vacancySeats={seatsInfo[2].seats}/>
      <ThirdClassCoachMap vacancySeats={seatsInfo[2].seats}/>
      <FourthClassCoachMap vacancySeats={seatsInfo[2].seats}/>
    </Panel>
  );
}


export default SeatsSelection;