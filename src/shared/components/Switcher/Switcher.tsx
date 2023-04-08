import classNames from "classnames";
import { ChangeEventHandler } from "react";

interface SwitcherProps {
  bemClass?: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Switcher(props: SwitcherProps) {
  const { bemClass, onChange } = props
  const className = 'switcher'
  return (<label className={classNames(className, bemClass)}>
    <input onChange={onChange} type="checkbox" className={`${className}__input`} />
    <span className={`${className}__slider`} />
  </label>)
}
