//components
import Button from "./components/Button/Button";
import OrderStepElement from "./components/OrderStepElement/OrderStepElement";
import Switcher from "./components/Switcher/Switcher";
import Slogan from "./components/Slogan/Slogan";
import MultiRangeSlider from "./components/MultiRangeSlider/MultiRangeSlider";
import TextField from "./components/TextField/TextField";
import DateField from "./components/DateField/DateField";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Panel from "./components/Panel/Panel";
import PointInfo from "./components/PointInfo/PointInfo";
import TrainDirection from "./components/TrainDirection/TrainDirection";
import TrainPath from "./components/TrainPath/TrainPath";
import InputWithLabelOnInput from "./components/InputWithLabelOnInput/InputWithLabelOnInput";
import Price from "./components/Price/Price";
import DatePickerField from "./components/DateFieldFormik/DateFieldFormik";
import WidgetHeader from "./components/WidgetHeader/WidgetHeader";
import PassengerCard from "./components/PassengerCard/PassengerCard";

//assests
import { ReactComponent as TrainLogo } from './assets/icons/train-logo.svg';
import { ReactComponent as Coupe } from './assets/icons/ticketFiltersIcons/coupe.svg';
import { ReactComponent as Express } from './assets/icons/ticketFiltersIcons/express.svg';
import { ReactComponent as LuxuryClass } from './assets/icons/ticketFiltersIcons/luxury-class.svg';
import { ReactComponent as SeatClass } from './assets/icons/ticketFiltersIcons/seat-class.svg';
import { ReactComponent as SecondClass } from './assets/icons/ticketFiltersIcons/second-class.svg';
import { ReactComponent as WiFi } from './assets/icons/ticketFiltersIcons/wifi.svg';
import { ReactComponent as Coffee } from './assets/icons/ticketFiltersIcons/coffee.svg';
import { ReactComponent as OrangeArrow } from './assets/icons/arrows/small-orange-arrow.svg';
import ArrowLeft from './assets/icons/arrows/arrow-left.svg';
import ArrowRight from './assets/icons/arrows/arrow-right.svg';
import TrainLogoSmall from './assets/icons/train-logo-small.svg';
import OrangeClockIcon from './assets/icons/orange-clock-icon.svg';
import FirstClassIcon from './assets/icons/wagon-type-icons/first-class.svg';
import FirstClassIconActive from './assets/icons/wagon-type-icons/first-class-active.svg';
import SecondClassIcon from './assets/icons/wagon-type-icons/second-class.svg';
import SecondClassIconActive from './assets/icons/wagon-type-icons/second-class-active.svg';
import ThirdClassIcon from './assets/icons/wagon-type-icons/third-class.svg';
import ThirdClassIconActive from './assets/icons/wagon-type-icons/third-class-active.svg';
import FourthClassIcon from './assets/icons/wagon-type-icons/fourth-class.svg';
import FourthClassIconActive from './assets/icons/wagon-type-icons/fourth-class-active.svg';
import AirConditionerServiceUntouchable from './assets/icons/wagon-service-icons/air-conditioner-untouchable.svg';
import LinensService from './assets/icons/wagon-service-icons/linens.svg';
import LinensServiceActive from './assets/icons/wagon-service-icons/linens-active.svg';
import LinensServiceActiveUntouchable from './assets/icons/wagon-service-icons/linens-active-untouchable.svg';
import WiFiService from './assets/icons/wagon-service-icons/wifi.svg';
import WifiServiseActive from './assets/icons/wagon-service-icons/wifi-active.svg';
import LoadingScreenAnimation from './assets/animations/loading-animation/loading-animation.gif';
import ErrorIcon from './assets/icons/status-icons/error.png';
import SuccessfullyIcon from './assets/icons/status-icons/successfully.png';
import CheckMark from './assets/icons/chek-mark.svg';
import UserIcon from './assets/icons/user-icon.svg';
import PrintTicket from './assets/icons/instuction-icons/print-ticket.svg';
import GetTicket from './assets/icons/instuction-icons/get-ticket.svg';
import PresentTicket from './assets/icons/instuction-icons/present-ticket.svg';

//interfaces
import IAviableSeatsInfo from "./interfaces/IAviableSeatsInfo";
import IDirectionInfo from "./interfaces/IDirectionInfo";
import IPriceInfo from "./interfaces/IPriceInfo";
import ISeatPriceInfo from "./interfaces/ISeatPriceInfo";
import ISeat from "./interfaces/ISeat";

//APIes
import { globalURL, backendURL } from "./API/globalUrl";

//helpers
import toUpperCaseFirst from "./helpers/toUpperCaseFirst";
import getDuration from "./helpers/getDuration";
import numberWithSpaces from "./helpers/numberWithSpaces";

//customHooks
import useTicketsSearchRequest from "./customHooks/useTicketsSearchRequest";
import useFindTicketRequest from "./customHooks/useFindTicketsRequest";
import useOffsetReset from "./customHooks/useOffsetReset";
import useWagonInformationRequest from "./customHooks/useWagonInformationRequest";

//components
export {
  Button,
  OrderStepElement,
  Switcher, Slogan,
  MultiRangeSlider,
  TextField,
  DateField,
  ToggleButton,
  Panel,
  PointInfo,
  TrainDirection,
  TrainPath,
  InputWithLabelOnInput,
  Price,
  DatePickerField,
  WidgetHeader,
  PassengerCard
};

//assets
export {
  TrainLogo,
  Coupe,
  Express,
  LuxuryClass,
  SeatClass,
  SecondClass,
  WiFi,
  Coffee,
  OrangeArrow,
  ArrowRight,
  ArrowLeft,
  TrainLogoSmall,
  OrangeClockIcon,
  FirstClassIcon,
  FirstClassIconActive,
  SecondClassIcon,
  SecondClassIconActive,
  ThirdClassIcon,
  ThirdClassIconActive,
  FourthClassIcon,
  FourthClassIconActive,
  AirConditionerServiceUntouchable,
  LinensService,
  LinensServiceActive,
  LinensServiceActiveUntouchable,
  WiFiService,
  WifiServiseActive,
  LoadingScreenAnimation,
  ErrorIcon,
  SuccessfullyIcon,
  CheckMark,
  UserIcon,
  GetTicket,
  PrintTicket,
  PresentTicket
};

//interfaces
export type {
  IAviableSeatsInfo,
  IDirectionInfo,
  IPriceInfo,
  ISeatPriceInfo,
  ISeat,
};

//APIes
export {
  globalURL,
  backendURL
};

//helpers 
export {
  toUpperCaseFirst,
  getDuration,
  numberWithSpaces
};

//customHooks
export { useTicketsSearchRequest, useFindTicketRequest, useOffsetReset, useWagonInformationRequest }