import {
  AirConditionerServiceUntouchable,
  LinensService,
  LinensServiceActive,
  LinensServiceActiveUntouchable,
  WiFiService,
  WifiServiseActive
} from "../../../shared";
import classNames from "classnames";
import { useState } from "react";

interface WagonSeatsSericesProps {
  bemClass?: string,
  have_wifi: boolean,
  have_air_conditioning: boolean,
  is_linens_included: boolean,
  linens_needed: boolean,
}

function WagonSeatsServices(props: WagonSeatsSericesProps) {
  const [changedServices, setchangedServices] = useState({
    
  })
  const {
    bemClass,
    have_wifi,
    have_air_conditioning,
    is_linens_included,
    linens_needed
  } = props;

  const className = 'wagon-seats-services'
  return (
    <div className={classNames(className, `${bemClass}__${className}`)}>
      { have_air_conditioning && <div><img src={AirConditionerServiceUntouchable} alt="air conditioning" /></div> }
      { have_wifi && <div><img src={WiFiService} alt="wifi" /></div> }
      { linens_needed && is_linens_included ? <div><img src={LinensServiceActiveUntouchable} alt="" /></div> : <div><img src={LinensService} alt="" /></div>}

    </div>
  );
}

export default WagonSeatsServices;