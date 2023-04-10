import classNames from "classnames";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { ISeat } from "../../../../shared";
import { Seat } from "../../../index";
import CoachMapProps from "../CoachMapsInterfaces/CoachMapProps";

function ThirdClassCoachMap(props: CoachMapProps) {
  const { bemClass, seats, handleClick } = props;

  const className = 'coach-map'
  return (
    <div className={classNames(`${className}`, { [`${bemClass}__${className}`]: bemClass })}>
      {seats.map(item => <Seat
        key={nanoid()}
        bemClass={className}
        item={item}
        handleClick={handleClick}
        type={ item.index > 32 ? 'side' : 'basic' } />)}
    </div>
  );
}

export default ThirdClassCoachMap;