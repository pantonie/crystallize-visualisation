const {createApiCaller} = require('./createCaller');
const {tenants} = require('../config');

let callers = {};

const getCaller = (id) => {
  if (!tenants[id]) return false;
  if (!callers.id) {
    callers[id] = createApiCaller(id)
  }
  return callers[id];
}

module.exports = {
  getCaller
}