//components
import LoadingBar from "./components/LoadingBar/LoadingBar";
import TimeClarification from "./components/TimeClarification/TimeClarification";
import TrainGeneralInfo from "./components/TrainGeneralInfo/TrainGeneralInfo";
import TrainTimeTableInfo from "./components/TrainTimeTableInfo/TrainTimeTableInfo";
import TicketSeatsInfo from "./components/TicketSeatsInfo/TicketSeatsInfo";
import WagonTypeSelect from "./components/WagonTypeSelect/WagonTypeSelect";
import SeatInformation from "./components/SeatInformation/SeatInformation";
import WagonSeatsServices from "./components/WagonSeatsServices/WagonSeatsServices";
import CitiesSearchInput from "./components/CitiesSearchInput/CitiesSearchInput";
import Seat from "./components/Seat/Seat";

//interfaces
import ITrainInformation from "./Interfaces/ITrainInformation";

export { 
  LoadingBar, 
  TimeClarification, 
  TrainGeneralInfo, 
  TrainTimeTableInfo, 
  TicketSeatsInfo, 
  WagonTypeSelect, 
  SeatInformation, 
  WagonSeatsServices, 
  Seat,
  CitiesSearchInput };
  
export type { ITrainInformation }