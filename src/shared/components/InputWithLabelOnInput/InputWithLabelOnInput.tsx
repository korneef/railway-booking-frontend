import { nanoid } from "nanoid";
import classNames from "classnames";
import { ChangeEvent, useState } from "react";

interface InputWithLabelOnInputProps {
  label: string,
  bemClass?: string,
}

function InputWithLabelOnInput(props: InputWithLabelOnInputProps) {
  const [value, setValue] = useState('0');

  const { label, bemClass } = props;
  const id = nanoid();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => {
      if (/^(\d+)$/.test(e.target.value) || e.target.value === '') {
        return e.target.value
      }
      return prevValue
    })
  }

  const handleFocus = () => {
    if (value === '0') {
      setValue('')
    }
  }

  const handleBlur = () => {
    if (value === '') {
      setValue('0')
    }
  }
  const className = 'input-with-label';
  return (
    <div className={classNames(className, { [`${bemClass}__${className}`]: bemClass })}>
      <label
        className={`${className}__label`}
        htmlFor={id}>
        <span>{label}</span>
      </label>
      <input
        className={`${className}__input`}
        id={id}
        type='text'
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default InputWithLabelOnInput;