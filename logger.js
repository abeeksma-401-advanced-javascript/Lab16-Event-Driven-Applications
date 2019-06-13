'use strict';

const shriek = require('./eventEmitter');

shriek.on('save', speakOfSave);
shriek.on('read', speakOfRead);
shriek.on('error', speakOfLog('Error'));

function speakOfRead(file) {
  console.log(`This the file to be altered: ${file}`);
}

function speakOfSave(file) {
  console.log(`${file} Has been modified and saved.`);
};

function speakOfLog(eventType) {
  return payload => {
    if(typeof payload === undefined) {return};
    console.log(`${eventType}: ${payload}`);
  }
};

module.exports = {

  speakOfSave,
  speakOfRead,
  speakOfLog

}
