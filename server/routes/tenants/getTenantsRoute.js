const {tenants} = require('../../config');

function getTenantsRoute(_, res) {
  res.json(
    Object.entries(tenants).reduce(
      (acc, [id, {name}]) => { acc.push({id, name}); return acc }, []
    )
  )
}

module.exports = {
  getTenantsRoute
}