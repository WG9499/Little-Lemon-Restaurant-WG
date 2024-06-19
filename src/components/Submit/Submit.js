import React from "react";
import "./Submit.css";

const Submit = ({ children, ...props }) => {
  return (
    <button className="Submit" {...props}>
      {children}
    </button>
  );
};

export default Submit;
