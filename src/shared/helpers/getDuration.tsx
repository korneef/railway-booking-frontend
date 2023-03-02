import moment from "moment";
import 'moment/locale/ru'

export default function getDuration(duration: number): string {
  const hours = Math.floor(moment.duration(duration, 'second').asHours());
  const minutes = moment.duration(duration, 'second').minutes()
  return `${hours}:${minutes}`
}