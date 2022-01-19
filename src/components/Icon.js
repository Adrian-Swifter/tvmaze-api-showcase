import React from "react";

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
