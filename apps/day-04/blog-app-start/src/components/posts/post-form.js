import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import * as ReadableApi from '../../api';

const defaultPost = {
  title: '',
  body: '',
  author: '',
  category: '',
  commentCount: 2,
  voteScore: 1,
  timestamp: 0
};

class PostForm extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      post: defaultPost
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    ReadableApi.getCategories()
      .then(categories => {
        console.log('Success: Get categories successful!');
        this.setState({ categories });
      })
      .catch(error => {
        console.log('Error: Get categories failed!', error);
      });
  }

  onFormSubmit(event) {
    event.preventDefault();

    const post = Object.assign({}, this.state.post);
    post.timestamp = Date.now();

    ReadableApi.addPost(post)
      .then(post => {
        console.log('Success: Post successfully added/updated!');
        this.setState({ post: defaultPost });
      })
      .catch(error => {
        console.log('Error: Failed to add/update post.', error);
      });
  }

  handleChange(event) {
    // Retrieve name, value and control type flag of the form control
    const { name, value } = event.target;

    this.setState(prevState => {
      // Assign the updated value
      const newPost = Object.assign({}, prevState.post, { [name]: value });

      return { post: newPost };
    });
  }

  render() {
    const { categories, post } = this.state;

    return (
      <div className="row">
        <div className="col-sm-12">
          <h4>
            <FontAwesome name="envelope" /> Post Form
          </h4>
          <div className="well well-lg">
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={post.title}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  required
                  className="form-control"
                  id="body"
                  name="body"
                  cols="30"
                  rows="4"
                  value={post.body}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={post.author}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  required
                  className="form-control"
                  id="category"
                  name="category"
                  value={post.category}
                  onChange={this.handleChange}
                >
                  <option value="" />
                  {categories.map(({ code, name }) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-sm smallMargin"
              >
                <span className="glyphicon glyphicon-ok" /> Save
              </button>
              <a className="btn btn-warning btn-sm smallMargin">
                <span className="glyphicon glyphicon-remove" /> Cancel
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
