import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getConversionRate } from '../actions/currency-converter';

export class DollarBalance extends Component {
  componentDidMount() {
    this.props.getConversionRate();
  }

  computeBalanceInDollars() {
    const { balance, conversionRate } = this.props;

    return conversionRate > 0 ? balance / conversionRate : 0;
  }

  render() {
    return <h3>In USD: {this.computeBalanceInDollars()}</h3>;
  }
}

export default connect(
  ({ balance, conversionRate }) => ({ balance, conversionRate }),
  { getConversionRate }
)(DollarBalance);
