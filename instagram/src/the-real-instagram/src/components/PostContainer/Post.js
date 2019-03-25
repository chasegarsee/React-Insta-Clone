import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  return (
    <div className="{PostWrapper}">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="ImageWrapper">
        <img className="Image" src={props.post.imageUrl} />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
