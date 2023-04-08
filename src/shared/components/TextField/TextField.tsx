import classNames from "classnames";
import { useState, KeyboardEventHandler, RefObject } from "react";

interface TextFieldProps {
  type?: string;
  placeholder?: string;
  bemClass?: string;
  onChange?: (value: string)=> void;
  propValue?: string
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  refEl?: RefObject<HTMLInputElement>
}

function TextField(props: TextFieldProps) {
  const { type, placeholder, bemClass, onChange, propValue, onKeyDown, refEl } = props;
  const [stateValue, setStateValue] = useState('');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateValue(event.target.value);
    onChange && onChange(event.target.value);
  }
  const value = propValue !== undefined ? propValue : stateValue;

  const className = 'textfield-input'
  return (
    <input
      value={value}
      className={classNames(className, {[`${bemClass}+__${className}`]: bemClass})}
      type={type ?? 'text'}
      placeholder={placeholder ?? ''}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      ref={refEl}
      />
  );
}

export default TextField;