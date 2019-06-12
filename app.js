'use strict';

const fs = require('fs');
require('./alterFile');

const shriek = require('./eventEmitter');

let file = process.argv.slice(2).shift();

alterFile(file);
