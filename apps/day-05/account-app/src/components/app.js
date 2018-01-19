import React from 'react';
import Account from './account';
import DollarBalance from './dollar-balance';

const App = () => {
  return (
    <div>
      <h2>My Bank Account</h2>
      <hr />
      <Account />
      <hr />
      <DollarBalance />
    </div>
  );
};

export default App;
