'use strict';

const { authenticate } = require('@feathersjs/authentication').hooks;

const addOwnerId = require('../../hooks/add-owner-id');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), addOwnerId()],
    update: [
      authenticate('jwt'),
    ],
    patch: [
      authenticate('jwt'),
    ],
    remove: [
      authenticate('jwt'),
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
