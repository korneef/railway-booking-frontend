import { nanoid } from "nanoid";
import classNames from "classnames";
import { ChangeEvent, useState, useRef, useEffect } from "react";

interface InputWithLabelOnInputProps {
  label: string,
  bemClass?: string,
}

function InputWithLabelOnInput(props: InputWithLabelOnInputProps) {
  const [value, setValue] = useState('0');
  const [labelPadding, setLabelPadding] = useState(0)
  const labelEl = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (labelEl.current !== null) {
        setLabelPadding(labelEl.current.offsetWidth)
      }
    }, 30)
  }, [labelEl])

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
  //console.log(labelEl.current)
  const className = 'input-with-label';
  return (
    <div className={classNames(className, { [`${bemClass}__${className}`]: bemClass })}>
      <label
        ref={labelEl}
        className={`${className}__label`}
        htmlFor={id}>
        {label}
      </label>
      <input
        className={`${className}__input`}
        id={id}
        type='text'
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ paddingLeft: `${labelPadding + 18}px` }}
      />
    </div>
  );
}

export default InputWithLabelOnInput;