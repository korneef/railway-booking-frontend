import { ArrowLeft, ArrowRight, Button, Panel } from 'shared';
import classNames from 'classnames';


interface SeatsSelectionProps {
  direciton: 'departure' | 'arrival',
}

function SeatsSelection(props: SeatsSelectionProps) {
  const { direciton } = props;

  const className = 'seats-selection'

  return (
    <Panel bemClass={className}>
      <div className={classNames(`${className}__train-choise`, { [`${className}__train-choise_${direciton}`]: direciton })}>
        <img src={direciton === 'departure' ? ArrowRight : ArrowLeft} alt="direction-arrow" className={`${className}__direction-arrow-image`}></img>
        <Button className={className} variant='transparent' >Выбрать другой поезд</Button>
      </div>

      <div className={`${className}__train-general-information`}>
        
      </div>
    </Panel>
  );
}


export default SeatsSelection;