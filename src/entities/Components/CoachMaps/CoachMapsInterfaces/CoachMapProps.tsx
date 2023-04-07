import { ISeat } from "app/store/ticketsListSlices"

export default interface CoachMapProps {
  bemClass?: string,
  vacancySeats: Array<ISeat>
}
