const {tenants} = require('./config');

console.log(
  Object.entries(tenants).reduce(
    (acc, [id, {name}]) => Object.assign(acc, {[id]: name}), {}
  )
)