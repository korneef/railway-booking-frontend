import classNames from "classnames"
import { ChangeEventHandler } from 'react'

interface ToggleButtonProps {
  bemClass?: string,
  handeClick: ChangeEventHandler<HTMLInputElement>,
  checked?: boolean;
  variant?: 'square' | 'circle'
}

function ToggleButton(props: ToggleButtonProps) {
  const { bemClass, handeClick, checked = false, variant = 'square' } = props
  const className = `toggle-button-${variant}`
  return (
    <div className={classNames(className, bemClass + `__${className}`)}>
      <label className={classNames(className + "__label")}>
        <input
          type="checkbox"
          checked={checked}
          className={`${className}__input`}
          onChange={handeClick}
        />
        <span className={`${className}__toggle`} />
      </label>
    </div>
  )
}

export default ToggleButton;
