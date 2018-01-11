import React from 'react';

import Header from './components/common/header';
import PostsRoot from './components/posts/posts-root';
import PostDetail from './components/posts/post-detail';
import PostForm from './components/posts/post-form';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PostsRoot />
        <PostDetail />
        <PostForm />
      </div>
    </div>
  );
};

export default App;
