import React from "react";
import "./SingleShow.css";
import Icon from "./Icon";

function SingleShow({ tvShowData, ...props }) {
  console.log(tvShowData);
  return (
    <div className="SingleShow">
      {tvShowData &&
      Object.keys(tvShowData).length === 0 &&
      Object.getPrototypeOf(tvShowData) === Object.prototype ? (
        <h1>loading</h1>
      ) : (
        <>
          <div className="ss-image">
            <img src={tvShowData.image.medium} alt="TV show poster" />
          </div>

          <div className="ss-info">
            <header>
              <h3 className="ss-name">{tvShowData.name}</h3>
              <div
                className="ss-summary"
                dangerouslySetInnerHTML={{ __html: tvShowData.summary }}
              />
            </header>

            <footer>
              <p className="ss-network">
                <Icon color="#BF0A30" icon={props.icon1} />
                <span>{tvShowData.network.name}</span>
              </p>
              <p className="ss-rating">
                <Icon color="gold" icon={props.icon2} />
                <span>{tvShowData.rating.average}</span>
              </p>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleShow;
