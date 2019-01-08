'use strict';

const users = require('./users/users.service.js');
const transactions = require('./transactions/transactions.service.js');
const profile = require('./profile/profile.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(transactions);
  app.configure(profile);
};
