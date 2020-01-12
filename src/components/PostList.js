import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import faker from "faker";

export class PostList extends Component {
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <img
            src={faker.image.avatar()}
            alt="user avatar"
            className="ui image"
          />
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">{post.body}</div>
          </div>
        </div>
      );
    });
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="ui very relaxed divided list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
