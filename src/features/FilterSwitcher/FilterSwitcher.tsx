import { Switcher } from "shared";
import React from "react";
import classNames from "classnames";

interface FilterSwitcherProps {
  svgIcon: React.ReactElement<React.SVGProps<SVGSVGElement>>,
  children: string,
  bemClass?: string
}

export default function FilterSwitcher(props: FilterSwitcherProps) {
  const {svgIcon, children, bemClass} = props;
  const className = 'filter-switcher';
  return (
    <div className={classNames(className, bemClass)}>
      <div className={`${className}__description-wrapper`}>
        <div className={`${className}__icon`}>{svgIcon}</div>
        <div className={`${className}__name`}>{children}</div>
      </div>
      <Switcher bemClass={`${className}__switcher`}/>
    </div>
  );
}