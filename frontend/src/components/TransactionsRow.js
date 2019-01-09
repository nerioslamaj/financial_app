import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const TransactionRow = ({ source, amount, createdAt, _id, history, activity }) => (
  <Table.Row key={_id} onClick={() => history.push(`/view/${_id}`)} negative={activity === 'EXPENSE'} positive={activity === 'INCOME'}>
    <Table.Cell>{source}</Table.Cell>
    <Table.Cell>£{amount}</Table.Cell>
    <Table.Cell>{new Date(createdAt).toLocaleDateString()}</Table.Cell>
    <Table.Cell><Icon color='blue' name='edit'/></Table.Cell>
  </Table.Row>
);

TransactionRow.defaultProps = {
  history: {},
};

TransactionRow.propTypes = {
  _id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(TransactionRow);
