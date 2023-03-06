import moment from "moment";
import 'moment/locale/ru'

export default function getDuration(duration: number): string {
  const hours = Math.floor(moment.duration(duration, 'second').asHours());
  let minutes: number | string = moment.duration(duration, 'second').minutes()
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`
}