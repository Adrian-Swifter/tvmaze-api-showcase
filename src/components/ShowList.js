import React from "react";
import "./ShowList.css";
import SingleShow from "./SingleShow";

function ShowList() {
  return (
    <div>
      <SingleShow icon1="flag-usa" icon2="star" />
      <SingleShow icon1="flag-usa" icon2="star" />
      <SingleShow icon1="canadian-maple-leaf" icon2="star" />
    </div>
  );
}

export default ShowList;
