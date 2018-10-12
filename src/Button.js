import React from "react";

const Button = ({
  children,
  classType,
  handleClick,
  counter,
  counter:{id}
}) => {
  const argumentToCall = children === "Delete" ? id : counter;
  return (
    <button
      onClick={() => handleClick(argumentToCall)}
      className={`btn btn-${classType} btn-lg m-2`}
    >
      {children}
    </button>
  );
};

export default Button;
