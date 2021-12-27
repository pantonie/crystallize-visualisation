const express = require('express');
const cors = require('cors');
const router = require('./routes');
const {port} = require('./config');
// const logger = require('./utils/logger');

const app = new express();

app.use(cors({
  origin: '*'
}))
// app.use(logger);
app.use(router);

app.listen(port, () => {
  console.log('Crystallize service API is working on port ', port)
});



