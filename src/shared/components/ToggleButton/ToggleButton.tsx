import classNames from "classnames"
import { ChangeEventHandler } from 'react'

interface ToggleButtonProps {
  bemClass?: string,
  handeClick: ChangeEventHandler<HTMLInputElement>,
}

function ToggleButton(props: ToggleButtonProps) {
  const { bemClass, handeClick } = props
  const className = 'toggle-button'
  return (
    <div className={classNames(className, bemClass + `__${className}`)}>
      <label className={classNames(className + "__label")}>
        <input
          type="checkbox"
          className={`${className}__input`}
          onChange={handeClick}
        />
        <span className={`${className}__toggle`} />
      </label>
    </div>
  )
}

export default ToggleButton;
