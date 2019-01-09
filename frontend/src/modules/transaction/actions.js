import { createAction } from 'redux-actions';

export const REQUEST_RECENT_TRANSACTIONS = 'REQUEST_RECENT_TRANSACTIONS';
export const RECEIVE_RECENT_TRANSACTIONS = 'RECEIVE_RECENT_TRANSACTIONS';
export const REQUEST_CREATE_TRANSACTION = 'REQUEST_CREATE_TRANSACTION';
export const REQUEST_TRANSACTION = 'REQUEST_TRANSACTION';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const REQUEST_MY_TRANSACTIONS = 'REQUEST_MY_TRANSACTIONS';
export const RECEIVE_MY_TRANSACTIONS = 'RECEIVE_MY_TRANSACTIONS';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const MODIFY_TRANSACTION = 'MODIFY_TRANSACTION';

export const requestRecentTransactions = createAction(REQUEST_RECENT_TRANSACTIONS);
export const receiveRecentTransactions = createAction(RECEIVE_RECENT_TRANSACTIONS);
export const requestCreateTransaction = createAction(REQUEST_CREATE_TRANSACTION);
export const requestTransaction = createAction(REQUEST_TRANSACTION);
export const receiveTransaction = createAction(RECEIVE_TRANSACTION);
export const requestMyTransactions = createAction(REQUEST_MY_TRANSACTIONS);
export const receiveMyTransactions = createAction(RECEIVE_MY_TRANSACTIONS);
export const deleteTransaction = createAction(DELETE_TRANSACTION);
export const modifyTransaction = createAction(MODIFY_TRANSACTION);
