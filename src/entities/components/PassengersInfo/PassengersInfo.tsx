import { ToggleButton } from "shared";
import { ReactEventHandler, useState } from "react";
import { useAppSelector } from "app/store/hooks";


function PassengersInfo() {
  const [isChecked, setIsChecked] = useState(true);
  const { adultCount, childrenCount, childrenWithOutPlaceCount } = useAppSelector(state => state.order.preOrder)
  const handleClick: ReactEventHandler<HTMLInputElement> = (): void => {
    setIsChecked(!isChecked);
  }

  const className = 'passengers-info'
  return (
    <>
      <div className={`${className}__header-wrapper`}>
        <h2 className={`${className}__header`}>Пассажиры
        </h2>
        <ToggleButton bemClass={className} handeClick={handleClick} checked={isChecked}/>
      </div >
      {
        isChecked ? <>
          {adultCount !== 0 && <div className={`${className}__passenger-type`}>{`Взрослых: ${adultCount}`}</div>}
          {childrenCount !== 0 && <div className={`${className}__passenger-type`}>{`Детских: ${childrenCount}`}</div>}
          {childrenWithOutPlaceCount !== 0 && <div className={`${className}__passenger-type`}>{`Детских без места: ${childrenCount}`}</div>}
        
        </> : false
      
      }
    </>
  );
}

export default PassengersInfo;