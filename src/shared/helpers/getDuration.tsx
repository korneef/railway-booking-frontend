import moment from "moment";
import 'moment/locale/ru'

interface IgetDuration {
  hoursName: string,
  minutesName: string,
  timer: string,
  hours: number,
  minutes: number
}

export default function getDuration(duration: number): IgetDuration {
  const hours = Math.floor(moment.duration(duration, 'second').asHours());
  const minutes = moment.duration(duration, 'second').minutes();
  let minutesForTimer: number | string = minutes
  if (minutesForTimer < 10) {
    minutesForTimer = `0${minutes}`;
  }

  let minutesName: string = 'минут'
  if (minutes % 100 >= 5 &&  minutes %100 <= 20) {
    minutesName = 'минут';
  } else if (minutes % 10 === 1) {
    minutesName = 'минута';
  } else if ( minutes % 10 === 2 || minutes % 10 === 3 || minutes % 10 === 4) {
    minutesName = 'минуты';
  }

  let hoursName: string = 'часов'
  if (hours % 100 >= 5 &&  hours % 100 <= 20) {
    hoursName = 'часов';
  } else if (hours % 10 === 1) {
    hoursName = 'час';
  } else if ( hours % 10 === 2 || hours % 10 === 3 || hours % 10 === 4) {
    hoursName = 'часа';
  }

  return {
    hoursName: hoursName,
    minutesName: minutesName,
    timer: `${hours}:${minutesForTimer}`,
    hours: hours,
    minutes: minutes
  }
}
