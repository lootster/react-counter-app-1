import React from "react";

const applyFormat = value => {
  const commonClass = "badge badge-pill badge-"
  return value > 0 ? (
    <span className={`${commonClass}success`}>Postive</span>
  ) : value === 0 ? (
    <span className={`${commonClass}primary`}>Zero</span>
  ) : (
    <span className={`${commonClass}danger`}>Negative</span>
  );
};

const Label = ({ value, name }) => {
  return (
    <div className="center">
      <span className="badge badge-pill badge-info">{name}</span>
      <br/>
      <span>{applyFormat(value)}</span>
    </div>
  );
};

export default Label;
