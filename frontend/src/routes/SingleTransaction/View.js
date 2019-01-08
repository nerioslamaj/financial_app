import React, { Component } from 'react';
import { Header, Image, Segment, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class SingleTransaction extends Component {

  componentWillMount() {
    this.props.requestTransaction(this.props.match.params.transactionId);
  }

  render() {
    const transaction = this.props.currTransaction;
    if (!Object.prototype.hasOwnProperty.call(transaction, 'name')) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <Header as="h1" textAlign="center" >{transaction.name}</Header>
        <Image src={transaction.imageUrl} size="medium" centered />
        <Segment.Group>
          { /* eslint-disable */ }
          {transaction.ingredients.map((ing, i) => <Segment key={i}>{ing}</Segment>)}
        </Segment.Group>
        <Container text>
          {transaction.description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
          { /* eslint-enable */ }
        </Container>
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
    // _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      transactionId: PropTypes.string,
    }),
  }).isRequired,
};

