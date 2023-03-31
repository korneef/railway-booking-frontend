import classNames from "classnames";

interface TextFieldProps {
  type?: string;
  placeholder?: string;
  bemClass?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>)=> void;
}

function TextField(props: TextFieldProps) {
  const { type, placeholder, bemClass, handleChange } = props;
  const className = 'textfield-input'
  return (
    <input
      className={classNames(className, {[`${bemClass}+__${className}`]: bemClass})}
      type={type ?? 'text'}
      placeholder={placeholder ?? ''}
      onChange={handleChange}
      />
  );
}

export default TextField;