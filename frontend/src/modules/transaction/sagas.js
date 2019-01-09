import { takeEvery, call, put } from 'redux-saga/effects';
import { createTransaction, findTransactions, getTransaction, modifyTransaction } from './api';

import {
  receiveRecentTransactions,
  receiveTransaction,
  receiveMyTransactions,
  REQUEST_TRANSACTION,
  REQUEST_RECENT_TRANSACTIONS,
  REQUEST_MY_TRANSACTIONS,
  REQUEST_CREATE_TRANSACTION,
} from './actions';

function* callRecentTransactions({ payload }) {
  const transactions = yield call(findTransactions, payload);
  yield put(receiveRecentTransactions(transactions.data));
}

export function* recentTransactionsSaga() {
  yield takeEvery(REQUEST_RECENT_TRANSACTIONS, callRecentTransactions);
}

function* callCreateTransaction({ payload: { redirect, data } }) {
  const transaction = yield call(createTransaction, data);
  // eslint-disable-next-line
  redirect(transaction._id);
}

export function* addTransactionSaga() {
  yield takeEvery(REQUEST_CREATE_TRANSACTION, callCreateTransaction);
}

function* callModifyTransaction({ payload }) {
  const transaction = yield call(getTransaction, payload);
  yield put(modifyTransaction(transaction));
}

export function* modifyTransactionSaga() {
  yield takeEvery(REQUEST_CREATE_TRANSACTION, callModifyTransaction);
}

function* callTransaction({ payload }) {
  const transaction = yield call(getTransaction, payload);
  yield put(receiveTransaction(transaction));
}

export function* transactionSaga() {
  yield takeEvery(REQUEST_TRANSACTION, callTransaction);
}

function* callMyTransactions({ payload }) {
  const myTransactions = yield call(findTransactions, payload);
  yield put(receiveMyTransactions(myTransactions.data));
}

export function* myTransactionsSaga() {
  yield takeEvery(REQUEST_MY_TRANSACTIONS, callMyTransactions);
}
