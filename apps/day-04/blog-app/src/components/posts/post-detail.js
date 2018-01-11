import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import * as ReadableApi from '../../api';

class PostDetail extends Component {
  constructor() {
    super();

    this.state = { post: {} };
  }

  componentDidMount() {
    const id = 1;
    ReadableApi.getPost(id)
      .then(post => {
        console.log(`Success: Get post successful! (id: ${id})`);
        this.setState({ post });
      })
      .catch(error => {
        console.log(`Error: Get post failed! (id: ${id})`);
        console.log('Message:', error);
      });
  }

  render() {
    const { post } = this.state;

    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12">
              <h4>
                <FontAwesome name="envelope" /> Post Detail
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <a className="btn btn-sm btn-primary smallMargin">
                <span className="glyphicon glyphicon-chevron-left" /> Posts
              </a>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <FontAwesome name="envelope" /> {post.title}
                  </h3>
                </div>
                <div className="panel-body">
                  <p>{post.body}</p>
                </div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <FontAwesome name="user" /> Author: {post.author}
                  </li>
                  <li className="list-group-item">
                    <FontAwesome name="object-group" /> Category:{' '}
                    {post.category}
                  </li>
                  <li className="list-group-item">
                    <FontAwesome name="comments-o" /> {post.commentCount}{' '}
                    comment(s)
                  </li>
                  <li className="list-group-item">{post.voteScore} like(s)</li>
                </ul>
                <div className="panel-footer">
                  <a className="btn btn-primary btn-sm smallMargin">
                    <span className="glyphicon glyphicon-edit" /> Edit
                  </a>
                  <button className="btn btn-warning btn-sm smallMargin">
                    <span className="glyphicon glyphicon-trash" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
