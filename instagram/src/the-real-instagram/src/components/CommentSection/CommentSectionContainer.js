import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  handleCommentSubmission = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: "John Doe" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((theActualComment, id) => (
          <Comment key={id} comment={theActualComment} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handleCommentSubmission}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
