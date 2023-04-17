import React from "react";

import './Button.css';

type ButtonProps = {
  children: React.ReactNode,
  className?: String,
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick} className={`btn-util ${props.className}`}>
    {props.children}
  </button>
}

export default Button;