import React from "react";
import "./Spinner.css";

const spinner = () => (
  <div className="cont">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);

export default spinner;
