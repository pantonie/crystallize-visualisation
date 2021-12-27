const { getCaller } = require('../../utils/callers');
const { getShapeNames } = require('../../utils/queries');

async function getShapeNamesRoute (req, res) {
  const { tenant } = req.params;
  const caller = getCaller(tenant);
  if (!caller){
    res.status(403).json({ message: `Tenant ${tenant} not found`});
    return;
  }
  let names;
  try {
    names = await caller({query: getShapeNames(tenant)});
    res.send(names.data.shape.getMany);
  } catch(e){
    console.log(e);
    res.status(403).send(e);
  }
}

module.exports = {
  getShapeNamesRoute
}