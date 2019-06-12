'use strict';

const shriek = require('./eventEmitter');

shriek.on('error', err => {
  console.log(err);
})

