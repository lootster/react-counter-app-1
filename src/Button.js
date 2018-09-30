import React from 'react';

const Button = ({children, classType, clickHandler}) => {
  return (
    <button onClick={clickHandler} className={`btn btn-${classType} btn-lg m-2`}>
      {children}
    </button>
  );
}

export default Button;
