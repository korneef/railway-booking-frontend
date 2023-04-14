import { ReactNode } from 'react';
import classNames from 'classnames';

interface IPops {
  children: ReactNode;
  bemClass?: string
}

function WidgetHeader({children, bemClass}: IPops) {
  

  const className = 'widget-header'
  return (
    <div className={classNames(className, {[`${bemClass}__widget-header`]: bemClass})}>
      {children}
    </div>
  );
}

export default WidgetHeader;