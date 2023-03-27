import React from "react";

import "./styles/Button.scss";
import classNames from "classnames";


export default function Button(props) {
  const { children, orangy, tomato } = props;

  const buttonClass = classNames("button", "coiny", {
    "button--orangy": orangy, //if props.orangy is true, append className
    "button--tomato": tomato,
  });

  const handleClick = (event) => {
    props.onClick && props.onClick(event);
  }

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
