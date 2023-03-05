import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>{
  variant: 'standart' | 'standart-white' | 'small' | 'transparent' | 'transparent-white';
  disabled?: boolean;
  children?: string;
  className: string;
}

export default function Button(props: ButtonProps) {
  const {
    type = 'button',
    onClick,
    children,
    className = '',
    variant = 'standart',
  } = props;


  const classes = classNames(
    `${className}__button`, 
    `button__${variant}`,
    )
  return <button type={type} className={classes} onClick={onClick}>{children}</button>
}