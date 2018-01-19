import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deposit, withdraw } from '../actions/balance';

export class Account extends Component {
  constructor() {
    super();

    this.state = { amount: 0 };

    this.onAmountChange = this.onAmountChange.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  onAmountChange(event) {
    this.setState({ amount: parseInt(event.target.value, 10) });
  }

  deposit() {
    this.props.deposit(this.state.amount);
  }

  withdraw() {
    this.props.withdraw(this.state.amount);
  }

  render() {
    return (
      <div>
        <h3 className="balance">Account Balance (INR): {this.props.balance}</h3>
        <br />
        <input className="input-amount" onChange={this.onAmountChange} />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

export default connect(({ balance }) => ({ balance }), { deposit, withdraw })(
  Account
);
