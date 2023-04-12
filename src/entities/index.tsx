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
import CoachInfo from "./components/CoachInfo/CoachInfo";
import FirstClassCoachMap from "./components/CoachMaps/FirstClassCoachMap/FirstClassCoachMap";
import SecondClassCoachMap from "./components/CoachMaps/SecondClassCoachMap/SecondClassCoachMap";
import ThirdClassCoachMap from "./components/CoachMaps/ThirdClassCoachMap/ThirdClassCoachMap";
import FourthClassCoachMap from "./components/CoachMaps/FourthClassCoachMap/FourthClassCoachMap";
import PassengersInfo from "./components/PassengersInfo/PassengersInfo";

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
  CitiesSearchInput,
  CoachInfo,
  FirstClassCoachMap,
  SecondClassCoachMap,
  ThirdClassCoachMap,
  FourthClassCoachMap,
  PassengersInfo
};
  
export type { ITrainInformation }