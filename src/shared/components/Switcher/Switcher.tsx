import classNames from "classnames"

interface SwitcherProps {
  bemClass?: string,
}

export default function Switcher(props: SwitcherProps) {
  const { bemClass } = props
  const className = 'switcher'
  return (<label className={classNames(className, bemClass)}>
    <input type="checkbox" className={`${className}__input`} />
    <span className={`${className}__slider`} />
  </label>)
}
