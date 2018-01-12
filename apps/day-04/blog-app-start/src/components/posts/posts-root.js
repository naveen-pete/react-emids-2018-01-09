import React, { Component } from 'react';

import Categories from './categories';
import PostList from './post-list';

// -------------------------------------------------------
// The root component for Posts module. It uses:
// 1. Categories component to show the list of categories
// 2. PostList component to manage list of posts
// -------------------------------------------------------
class PostsRoot extends Component {
  constructor() {
    super();

    this.state = { currentCategory: { code: 'all', name: 'All' } };

    this.onCategoryClicked = this.onCategoryClicked.bind(this);
  }

  onCategoryClicked(selectedCategory) {
    this.setState({ currentCategory: selectedCategory });
  }

  render() {
    return (
      <div className="row">
        <Categories categoryClicked={this.onCategoryClicked} />
        <PostList category={this.state.currentCategory} />
      </div>
    );
  }
}

export default PostsRoot;
