'use strict';

const fs = require('fs');
const util = require('util');
const shriek = require('./eventEmitter');


//i have to promisify and do something at some point....
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);


const alterFile = async file => {
  let data = await read(file)
  let text = data.toString().toUpperCase();
  await write(file, Buffer.from(text));
  console.log(`${file} saved`);
}

module.exports = alterFile;
