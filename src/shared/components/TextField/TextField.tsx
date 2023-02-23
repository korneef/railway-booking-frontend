import classNames from "classnames";

interface TextFieldProps {
  type?: string;
  placeholder?: string;
  bemClass: string;
}

function TextField(props: TextFieldProps) {
  const { type, placeholder, bemClass } = props;
  const className = 'textfield-input'
  return (
    <input
      className={classNames(className, bemClass+`__${className}`)}
      type={type ?? 'text'}
      placeholder={placeholder ?? ''} />
  );
}

export default TextField;