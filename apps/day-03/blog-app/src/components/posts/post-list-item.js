import React from 'react';
import FontAwesome from 'react-fontawesome';

import { getFormattedDate } from '../../helpers';

const PostListItem = props => {
  const { post } = props;

  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <FontAwesome name="envelope" /> {post.title}
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-sm-8">
            <FontAwesome name="user" /> {post.author}
          </div>
          <div className="col-sm-4">
            <FontAwesome name="object-group" /> {post.category}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <FontAwesome name="comments-o" /> {post.commentCount} comment(s)
          </div>
          <div className="col-sm-4">{post.voteScore} like(s)</div>
          <div className="col-sm-4">
            <FontAwesome name="clock-o" /> {getFormattedDate(post.timestamp)}
          </div>
        </div>
      </div>
      <div className="panel-footer">
        <a className="btn btn-xs btn-info smallMargin">
          <FontAwesome name="envelope-open-o" /> View
        </a>
        <a className="btn btn-xs btn-primary smallMargin">
          <span className="glyphicon glyphicon-edit" /> Edit
        </a>
        <button className="btn btn-xs btn-warning smallMargin">
          <span className="glyphicon glyphicon-trash" /> Delete
        </button>
      </div>
    </div>
  );
};

export default PostListItem;
