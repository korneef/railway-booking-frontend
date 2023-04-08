import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
  variant: 'standart' | 'standart-white' | 'small' | 'transparent' | 'transparent-white';
  disabled?: boolean;
  children?: string;
  className: string;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  const {
    type = 'button',
    children,
    className = '',
    variant = 'standart',
    onClick
  } = props;


  const classes = classNames(
    `${className}__button`,
    `button__${variant}`,
  )
  return <button type={type} className={classes} onClick={onClick}>
    {children}
  </button>
}