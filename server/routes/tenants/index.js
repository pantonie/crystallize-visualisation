const {Router} = require('express');
const { getTenantsRoute} = require('./getTenantsRoute')

const router = Router();

router.get('/tenants', getTenantsRoute);

module.exports = router;