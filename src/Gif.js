import React from "react";

const Gif = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      <img
        alt="cat1"
        src="https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif"
      />
      <img
        alt="cat2"
        src="https://media.giphy.com/media/XJLdCHt1DUav6/giphy.gif"
      />
    </div>
  );
};

export default Gif;
