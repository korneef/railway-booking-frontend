import {
  FirstClassIcon,
  FirstClassIconActive,
  SecondClassIcon,
  SecondClassIconActive,
  ThirdClassIcon,
  ThirdClassIconActive,
  FourthClassIcon,
  FourthClassIconActive
} from 'shared'
import classNames from 'classnames'

interface WagonTypeSelectProps {
  type: 1 | 2 | 3 | 4,
  active: boolean,
  bemClass?: string,
  handleClick?: () => void
}



function WagonTypeSelect(props: WagonTypeSelectProps) {
  const { type, active, bemClass, handleClick } = props;

  let icon;
  let text;
  switch (type) {
    case 1:
      icon = active ? FirstClassIconActive : FirstClassIcon;
      text = 'Люкс';
      break;
    case 2:
      icon = active ? SecondClassIconActive : SecondClassIcon;
      text = 'Купэ';
      break;
    case 3:
      icon = active ? ThirdClassIconActive : ThirdClassIcon;
      text = 'Плацкарт';
      break
    case 4:
      icon = active ? FourthClassIconActive : FourthClassIcon;
      text = 'Сидячий';
  }

  const className = 'wagon-type-select';
  return (
    <div 
    className={classNames(className, {[`${bemClass}__${className}`]: bemClass})}
    onClick={handleClick}
    >
      <img className={`${className}__icon`} src={icon} alt="" />
      <div className={`${className}__type`}>{text}</div>
    </div>
  );
}

export default WagonTypeSelect;