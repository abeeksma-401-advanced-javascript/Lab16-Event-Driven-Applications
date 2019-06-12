'use strict';

const shriek = require('./eventEmitter');

shriek.on('save', speakOfSave);
shriek.on('error', speakOfLog('error'));

function speakOfSave(file) {
  console.log(`ALTER FILE HAS SAVED: ${file}`);
};

function speakOfLog(eventType) {
  return payload => {
    if(typeof payload === undefined) {return};
    console.log(eventType, payload);
  }
};

module.exports = {

  speakOfSave,
  speakOfLog

}
