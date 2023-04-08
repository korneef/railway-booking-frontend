import classNames from "classnames";
import { ReactNode } from "react";

interface PanelProps {
  bemClass: string,
  children: ReactNode,
  variant: 'white' | 'black'
}

function Panel(props: PanelProps) {
  const { bemClass, children, variant } = props;
  const className = `panel-${variant}`
  return (
    <div className={classNames(className, `${bemClass}__${className}`)}>
      {children}
    </div>
  );
}

export default Panel;