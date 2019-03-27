import React from "react";
import "./Comment.css";

const CommentInput = props => {
  return (
    <form className="CommentForm" onSubmit={props.submitComment}>
      <input
        className="CommentInput"
        type="text"
        value={props.comment}
        placeholder="Add Comment"
        onChange={props.changeComment}
      />
      <button>Comment</button>
    </form>
  );
};

export default CommentInput;
