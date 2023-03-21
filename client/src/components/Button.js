import React from "react";

import "./Button.scss";
import classNames from "classnames";


export default function Button(props) {
  const { children } = props;

  const buttonClass = classNames("button"/*, {
    "button--confirm": confirm, //if props.confirm is true, append className
    "button--danger": danger //same logic as above
  }*/);

  return (
    <button
      className={buttonClass}
      // onClick={onClick}
    >
      {children}
    </button>
  );
}