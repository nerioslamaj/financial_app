'use strict';

// Initializes the `profile` service on path `/profile`
const createService = require('feathers-mongodb');
const hooks = require('./profile.hooks');
const filters = require('./profile.filters');

module.exports = function () {
  const app = this;
  const paginate = { default: 500, max: 1000 };
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/profile', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('profile');

  mongoClient.then(client => {
    service.Model = client.db('inandout').collection('profile');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
