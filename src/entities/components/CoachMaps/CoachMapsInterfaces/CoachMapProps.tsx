import { ISeat } from "shared";

export default interface CoachMapProps {
  bemClass?: string,
  seats: Array<ISeat>
  handleClick: (item: ISeat) => void;
}
