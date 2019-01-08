'use strict';

// Initializes the `transactions` service on path `/transactions`
const createService = require('feathers-mongodb');
const hooks = require('./transactions.hooks');
const filters = require('./transactions.filters');

module.exports = function () {
  const app = this;
  const paginate = { default: 500, max: 1000 };
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/transactions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('transactions');

  mongoClient.then(client => {
    service.Model = client.db('inandout').collection('transactions');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
