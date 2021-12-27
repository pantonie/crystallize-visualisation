const {Router} = require('express')
const {getShapeNamesRoute} = require('./getShapeNames');
const { getShapeDefinitionRoute } = require('./getShapeDefinition')

const shapes = Router();

shapes.get('/shapeNames/:tenant',
  getShapeNamesRoute
)
shapes.get('/shapeDefinition', getShapeDefinitionRoute);

module.exports = shapes;