import React from 'react';

import Header from './components/common/header';
import PostsRoot from './components/posts/posts-root';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PostsRoot />
      </div>
    </div>
  );
};

export default App;
