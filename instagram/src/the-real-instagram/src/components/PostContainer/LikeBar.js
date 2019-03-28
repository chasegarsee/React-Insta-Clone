import React from "react";
import "./Posts.css";

const LikeBar = props => {
  return [
    <div
      className="LikeContainer"
      key="LikesIconsContainer"
      onClick={props.addLike}
    >
      <div className="LikeSection">
        <i className="far fa-heart" />
      </div>
      <div className="LikeSection">
        <i className="far fa-comment" />
      </div>
    </div>,
    <div className="LikeContainer" key="likes-container">
      <div className="LikeSection">{props.likes}</div>
    </div>
  ];
};

export default LikeBar;
