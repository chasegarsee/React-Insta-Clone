import React from "react";
import "./Posts.css";

const PostHeader = props => {
  return (
    <div className="PostHeader">
      <div className="ThumbnailWrapper">
        <img className="PostThumbnail" src={props.thumbnailUrl} />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
