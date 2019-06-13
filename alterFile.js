'use strict';

const fs = require('fs');
const util = require('util');
const shriek = require('./eventEmitter');
require('./logger');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);


const alterFile = async file => {
  try{
    let data = await read(file);
    shriek.emit('read', file);
    let text = data.toString().toUpperCase();
    await write(file, Buffer.from(text));
    shriek.emit('save', file);
  }
  catch(error){
    shriek.emit('error', error);
  }

}


module.exports = alterFile;
