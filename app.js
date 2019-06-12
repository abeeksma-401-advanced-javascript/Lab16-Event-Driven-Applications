'use strict';

const fs = require('fs');
const alterFile = require('./alterFile');
require('./logger');

const shriek = require('./eventEmitter');

let file = process.argv.slice(2).shift();

alterFile(file);
