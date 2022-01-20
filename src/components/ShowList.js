import React from "react";
import "./ShowList.css";
import SingleShow from "./SingleShow";

function ShowList(props) {
  return (
    <div>
      <SingleShow tvShowData={props.tvShow1} icon1="flag-usa" icon2="star" />
      <SingleShow tvShowData={props.tvShow2} icon1="flag-usa" icon2="star" />
      <SingleShow
        tvShowData={props.tvShow3}
        icon1="canadian-maple-leaf"
        icon2="star"
      />
    </div>
  );
}

export default ShowList;
