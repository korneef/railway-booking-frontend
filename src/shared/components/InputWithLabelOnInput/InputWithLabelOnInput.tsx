import { nanoid } from "nanoid";
import classNames from "classnames";
import { ChangeEvent } from "react";

interface InputWithLabelOnInputProps {
  label: string,
  bemClass?: string,
  value: number | string;
  changePassengerCount?: (e: ChangeEvent<HTMLInputElement>) => void
}

function InputWithLabelOnInput(props: InputWithLabelOnInputProps) {
  const { value, label, bemClass, changePassengerCount } = props;
  const id = nanoid();

  const className = 'input-with-label';
  return (
    <div className={classNames(className, { [`${bemClass}__${className}`]: bemClass })}>
      <label
        className={`${className}__label ${className}__label_no-border`}
        htmlFor={id}>
        <span>{label}</span>
      </label>
      <input
        className={`${className}__input ${className}__input_no-border`}
        id={id}
        type='text'
        value={value}
        onChange={changePassengerCount}
      />
    </div>
  );
}

export default InputWithLabelOnInput;