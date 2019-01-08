import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TransactionRow = ({ source, amount, createdAt, _id, editTransaction, activity }) => (
  <Table.Row key={_id} onClick={editTransaction} negative={activity === 'EXPENSE'} positive={activity === 'INCOME'}>
    <Table.Cell>{source}</Table.Cell>
    <Table.Cell>£{amount}</Table.Cell>
    <Table.Cell>{new Date(createdAt).toLocaleDateString()}</Table.Cell>
    <Table.Cell><Icon color='blue' name='edit'/></Table.Cell>
  </Table.Row>
);

TransactionRow.propTypes = {
  _id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  editTransaction: PropTypes.func
};

export default TransactionRow;
