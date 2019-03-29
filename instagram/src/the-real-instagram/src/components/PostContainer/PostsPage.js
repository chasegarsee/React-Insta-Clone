import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostsContainer from "/Users/FW_Digital_Media/Documents/git/React-Insta-Clone/instagram/src/the-real-instagram/src/components/PostContainer/PostsContainer.js";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import "../../App.css";
import "../SearchBar/searchBar.css";

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  filterPostsHandler = event => {
    const posts = this.state.posts.filter(thePost => {
      if (thePost.username.includes(event.target.value)) {
        return thePost;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.filterPostsHandler} />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}
export default PostPage;
