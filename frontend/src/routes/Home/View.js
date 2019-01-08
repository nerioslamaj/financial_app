import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class Home extends Component {

  componentWillMount() {
    this.props.requestRecentTransactions({
      query: { $sort: { createdAt: -1 } },
    });
  }

  render() {
    return (
      <div>
        <Divider />
      </div>
    );
  }
}

Home.defaultProps = {
  requestRecentTransactions: () => ({}),
  transactions: [],
};

Home.propTypes = {
  requestRecentTransactions: PropTypes.func,
  transactions: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })),
};
