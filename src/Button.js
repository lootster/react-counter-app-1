import React from "react";

const Button = ({
  children,
  classType,
  onAdd,
  onMinus,
  counter,
  onDelete
}) => {
  return onDelete ? (
    <button
      onClick={() => onDelete(counter.id)}
      className={`btn btn-${classType} btn-lg m-2`}
    >
      {children}
    </button>
  ) : onAdd ? (
    <button
      onClick={() => onAdd(counter)}
      className={`btn btn-${classType} btn-lg m-2`}
    >
      {children}
    </button>
  ) : (
    <button
      onClick={() => onMinus(counter)}
      className={`btn btn-${classType} btn-lg m-2`}
    >
      {children}
    </button>
  );
};

export default Button;
