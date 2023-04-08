import { Switcher } from "../../shared";
import React, { ChangeEvent } from "react";
import classNames from "classnames";
import { useFindTicketRequest, useOffsetReset } from "../../shared";
//TODO удалить комменты
// import { useState } from "react";

interface FilterSwitcherProps {
  svgIcon: React.ReactElement<React.SVGProps<SVGSVGElement>>,
  children: string,
  bemClass?: string,
  fiterType: string
}

export default function FilterSwitcher(props: FilterSwitcherProps) {
  const request = useFindTicketRequest();
  const offsetRest = useOffsetReset()

  const { svgIcon, children, bemClass, fiterType } = props;
  const className = 'filter-switcher';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    offsetRest()
    request(fiterType, e.target.checked)
  }

  return (
    <div className={classNames(className, bemClass)}>
      <div className={`${className}__description-wrapper`}>
        <div className={`${className}__icon`}>{svgIcon}</div>
        <div className={`${className}__name`}>{children}</div>
      </div>
      <Switcher onChange={handleChange} bemClass={`${className}__switcher`} />
    </div>
  );
}