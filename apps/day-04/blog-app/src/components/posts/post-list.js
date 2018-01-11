import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import PostListItem from './post-list-item';
import AppAlert from '../common/app-alert';

import * as ReadableApi from '../../api';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    ReadableApi.getPosts()
      .then(posts => {
        console.log('Success: Get posts successful!');
        this.setState({ posts });
      })
      .catch(error => {
        console.log('Error: Get posts failed!');
        console.log('Message: ', error);
      });
  }

  render() {
    const { posts } = this.state;
    const { category } = this.props;

    const filteredPosts =
      category.code === 'all'
        ? posts
        : posts.filter(post => post.category === category.code);

    return (
      <div className="col-sm-9">
        <div className="pull-right">
          <a className="btn btn-sm btn-primary">
            <span className="glyphicon glyphicon-plus" /> New Post
          </a>
        </div>
        <h4>
          <FontAwesome name="envelope" /> Posts (Category: {category.name})
        </h4>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => <PostListItem key={post.id} post={post} />)
        ) : (
          <AppAlert
            type="info"
            message="No posts available for selected category."
          />
        )}
      </div>
    );
  }
}

export default PostList;
