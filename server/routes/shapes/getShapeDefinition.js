const { getCaller } = require('../../utils/callers');
const { getShapeDefinition } = require('../../utils/queries');

async function getShapeDefinitionRoute (req, res) {
  const { tenant, shape } = req.query;
  const caller = getCaller(tenant);
  if (!caller){
    res.status(403).send(`Tenant ${tenant} not found`)
  }
  let def;
  try {
    def = await caller({query: getShapeDefinition(tenant, shape)});
  } catch (e) {
    res.status(403).send(e)
  }

  res.json(def.data.shape.get || {});
}

module.exports = {
  getShapeDefinitionRoute
}