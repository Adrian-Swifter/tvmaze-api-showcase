import React from "react";
import "./SingleShow.css";
import Icon from "./Icon";

function SingleShow(props) {
  return (
    <div className="SingleShow">
      <div className="ss-image">
        <img src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" />
      </div>

      <div className="ss-info">
        <header>
          <h3 className="ss-name">Under the Dome</h3>
          <div className="ss-summary">
            <p>
              <b>Under the Dome</b> is the story of a small town that is
              suddenly and inexplicably sealed off from the rest of the world by
              an enormous transparent dome. The town's inhabitants must deal
              with surviving the post-apocalyptic conditions while searching for
              answers about the dome, where it came from and if and when it will
              go away.
            </p>
          </div>
        </header>

        <footer>
          <p className="ss-network">
            <Icon color="#BF0A30" icon={props.icon1} />
            <span>CBS</span>
          </p>
          <p className="ss-rating">
            <Icon color="gold" icon={props.icon2} />
            <span>8.8</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default SingleShow;
