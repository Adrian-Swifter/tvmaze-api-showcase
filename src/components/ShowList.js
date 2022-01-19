import React from "react";
import "./ShowList.css";
import SingleShow from "./SingleShow";
import useTVMazeAPI from "../hooks/useTVMazeAPI"

function ShowList() {

  const tvShow1 = useTVMazeAPI(1);
  const tvShow2 = useTVMazeAPI(2);
  const tvShow3 = useTVMazeAPI(3);

  return (
    <div>
      <SingleShow tvShowData={tvShow1} icon1="flag-usa" icon2="star" />
      <SingleShow tvShowData={tvShow2}  icon1="flag-usa" icon2="star" />
      <SingleShow tvShowData={tvShow3}  icon1="canadian-maple-leaf" icon2="star" />
    </div>
  );
}

export default ShowList;
