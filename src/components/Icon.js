import React from "react";
import "./Icon.css";

function Icon({ color, icon }) {
  return (
    <i
      style={{ color: color }}
      className={
        icon === "canadian-maple-leaf" ? `fab fa-${icon}` : `fas fa-${icon}`
      }
    ></i>
  );
}

export default Icon;
