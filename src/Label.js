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

const Label = ({ value }) => {
  return <div>{applyFormat(value)}</div>;
};

export default Label;
