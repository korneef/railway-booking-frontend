import classNames from "classnames";
import { Panel } from "shared";
import { ITrainInformation } from "entities";
import { TrainLogo } from 'shared';




function TicketCard(props: any) {

  const className = 'ticket-card'
  return (
    <Panel bemClass={className} >
      <div className={classNames(className + '__shedule')}></div>
      <div className={classNames(className + '__aside-wrapper')}>
        <div className={classNames(className + '__seats-info')}></div>
        <div className={classNames(className + '__additional-services')}></div>
        <div className={classNames(className + '__take-seats-button-wrapper')}></div>
      </div>
    </Panel >
  );
}

export default TicketCard;
