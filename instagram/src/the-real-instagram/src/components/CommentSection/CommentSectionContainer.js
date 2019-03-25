import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map((text, id) => (
        <Comment key={id} comment={text} />
      ))}
      <CommentInput />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
