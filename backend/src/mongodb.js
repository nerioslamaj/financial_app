'use strict';

const MongoClient = require('mongodb').MongoClient;

module.exports = function () {
  const app = this;
  const config = app.get('mongodb');
  const promise = MongoClient.connect(config, {useNewUrlParser: true});

  app.set('mongoClient', promise);
};
