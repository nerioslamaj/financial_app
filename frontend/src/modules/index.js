import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';
import auth from 'feathers-authentication-client';
import { fork, all } from 'redux-saga/effects';

import { currTransaction, myTransactions, transactions } from './transaction/reducers';
import * as transactionSagas from './transaction/sagas';
import { user } from './user/reducers';
import * as userSagas from './user/sagas';

/*
userSagas = {
  loginSaga: () =>,
  signupSaga: () =>,
}
*/

export const rootReducer = combineReducers({
  currTransaction,
  myTransactions,
  transactions,
  user,
  router: routerReducer,
});

export function* rootSaga() {
  yield all([
    ...Object.values(userSagas),
    ...Object.values(transactionSagas),
  ].map(fork));
}

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(auth({ storage: window.localStorage }));

export const usersService = app.service('users');
export const transactionsService = app.service('transactions');
