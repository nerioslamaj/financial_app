'use strict';

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    hook.data.addedAt = new Date();
    hook.data.createdAt = new Date(hook.data.createdAt);
    return Promise.resolve(hook);
  };
};
