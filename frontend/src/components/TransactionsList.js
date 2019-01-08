import React from 'react';
import { Table, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import TransactionRow from './TransactionsRow';

const TransactionList = ({ transactions }) => (
  <Grid divided='vertically'>
    <Grid.Row>
      <Grid.Column width={6}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {transactions.map(transaction => TransactionRow(transaction))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>Total Income</Table.HeaderCell>
              <Table.HeaderCell>£800</Table.HeaderCell>
              <Table.HeaderCell>Total Expenses</Table.HeaderCell>
              <Table.HeaderCell>£34</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Savings (20%)</Table.HeaderCell>
              <Table.HeaderCell>£160</Table.HeaderCell>
              <Table.HeaderCell>Available</Table.HeaderCell>
              <Table.HeaderCell>£606</Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired
  })).isRequired,
};

export default TransactionList;
