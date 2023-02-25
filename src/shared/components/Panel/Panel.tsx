import classNames from "classnames";
import { ReactNode } from "react";

interface PanelProps {
  bemClass: string,
  children: ReactNode
}

function Panel(props: PanelProps) {
  const { bemClass, children } = props;
  const className = 'panel'
  return (
    <div className={classNames(className, `${bemClass}__${className}`)}>
      {children}
    </div>
  );
}

export default Panel;