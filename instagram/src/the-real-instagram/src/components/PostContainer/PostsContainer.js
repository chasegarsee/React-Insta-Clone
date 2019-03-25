import React from "react";
import Post from "./Post";
import "./PostsContainer.css";

const PostsContainer = props => {
  return (
    <div className="PostsContainer">
      {props.posts.map(post => (
        <Post key={post.imageUrl} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
