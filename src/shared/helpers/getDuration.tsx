import moment from "moment";
import 'moment/locale/ru'

export default function getDuration(duration: number): string {
  const hours = Math.floor(moment.duration(113820, 'second').asHours());
  const minutes = moment.duration(113820, 'second').minutes()
  return `${hours}:${minutes}`
}