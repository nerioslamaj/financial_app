import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TransactionList from '../../components/TransactionsList';

export default class MyTransactions extends Component {

  componentWillMount() {
    /* eslint-disable */
    this.props.requestMyTransactions({
      query: {
        ownerId: this.props.user._id,
      },
    });
    /* eslint-enable */
  }

  render() {
    return (
      <div>
        <TransactionList transactions={this.props.myTransactions} />
      </div>
    );
  }
}

MyTransactions.defaultProps = {
  requestMyTransactions: () => ({}),
  user: {},
  myTransactions: [],
};

MyTransactions.propTypes = {
  requestMyTransactions: PropTypes.func,
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
  }),
  myTransactions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })),
};
