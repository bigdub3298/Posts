import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

export class PostList extends Component {
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <h3 className="header">{post.title}</h3>
            <div className="description">{post.body}</div>
            <UserHeader userId={post.userId} />
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
