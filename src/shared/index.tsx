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
//assests
import { ReactComponent as TrainLogo } from './assets/icons/train-logo.svg';
import { ReactComponent as Coupe } from './assets/icons/ticketFiltersIcons/coupe.svg';
import { ReactComponent as Express } from './assets/icons/ticketFiltersIcons/express.svg';
import { ReactComponent as LuxuryClass } from './assets/icons/ticketFiltersIcons/luxury-class.svg';
import { ReactComponent as SeatClass } from './assets/icons/ticketFiltersIcons/seat-class.svg';
import { ReactComponent as SecondClass } from './assets/icons/ticketFiltersIcons/second-class.svg';
import { ReactComponent as WiFi } from './assets/icons/ticketFiltersIcons/wifi.svg';
import { ReactComponent as Coffee } from './assets/icons/ticketFiltersIcons/coffee.svg';
//interfaces
import IAviableSeatsInfo from "./interfaces/IAviableSeatsInfo";
import IDirectionInfo from "./interfaces/IDirectionInfo";
import IPriceInfo from "./interfaces/IPriceInfo";
import ISeatPriceInfo from "./interfaces/ISeatPriceInfo";

//APIes
import { globalURL } from "./API/globalUrl";
//helpers
import toUpperCaseFirst from "./helpers/toUpperCaseFirst";

//components
export { Button, OrderStepElement, Switcher, Slogan, MultiRangeSlider, TextField, DateField, ToggleButton, Panel };

//assets
export {TrainLogo, Coupe, Express, LuxuryClass, SeatClass, SecondClass, WiFi, Coffee };

//interfaces
export type { IAviableSeatsInfo, IDirectionInfo, IPriceInfo, ISeatPriceInfo};

//apies
export { globalURL };

//helpers 
export { toUpperCaseFirst };
