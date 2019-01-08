import { handleAction } from 'redux-actions';
import {
  receiveTransaction,
  receiveMyTransactions,
  receiveRecentTransactions,
} from './actions';

export const currTransaction = handleAction(receiveTransaction, {
  next(state, { payload }) {
    return payload;
  },
}, {});

export const myTransactions = handleAction(receiveMyTransactions, {
  next(state, { payload }) {
    return payload;
  },
}, []);

export const transactions = handleAction(receiveRecentTransactions, {
  next(state, { payload }) {
    return payload;
  },
}, []);
