const { Router } = require('express');
const shapesRouter = require('./shapes/index');
const tenantsRouter = require('./tenants/index')

const router = Router();

router.use(shapesRouter);
router.use(tenantsRouter);

module.exports = router;