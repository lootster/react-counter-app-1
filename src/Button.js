import React from "react";

const Button = ({ children, classType, clickHandler, onDelete, id }) => {
  return onDelete ? (
    <button
      onClick={() => onDelete(id)}
      className={`btn btn-${classType} btn-lg m-2`}
    >
      {children}
    </button>
  ) : (
    <button
      onClick={clickHandler}
      className={`btn btn-${classType} btn-lg m-2`}
    >
      {children}
    </button>
  );
};

export default Button;
