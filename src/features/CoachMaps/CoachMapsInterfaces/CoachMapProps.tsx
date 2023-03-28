export default interface CoachMapProps {
  bemClass?: string,
  vacancySeats: Array<vacancySeats>
}

type vacancySeats = {
  index: number,
  available: boolean
}