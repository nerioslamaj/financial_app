import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import AddTransaction from './../AddTransaction';
import PropTypes from 'prop-types';

export default class SingleTransaction extends Component {

  componentWillMount() {
    this.props.requestTransaction(this.props.match.params.transactionId);
  }

  render() {
    const transaction = this.props.currTransaction;
    if (!Object.prototype.hasOwnProperty.call(transaction, 'source')) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <AddTransaction></AddTransaction>
        <Header as="h1" textAlign="center"> {transaction._id} </Header>
        <Header as="h1" textAlign="center"> {transaction.source} </Header>
        <Header as="h1" textAlign="center"> {transaction.amount} </Header>
        <Header as="h1" textAlign="center"> {transaction.createdAt} </Header>
      </div>
    );
  }
}

SingleTransaction.defaultProps = {
  requestTransaction: () => ({}),
  currTransaction: {},
};

SingleTransaction.propTypes = {
  requestTransaction: PropTypes.func,
  currTransaction: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      transactionId: PropTypes.string,
    }),
  }).isRequired,
};

