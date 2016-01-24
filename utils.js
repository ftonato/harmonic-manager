'use strict';
const fs = require('fs');
const remote = require('remote');
const dialog = remote.require('dialog');

const nameFileDefault = 'harmonic.json';

module.exports = {
  newInit: function() {
    //alert('NEW INIT');

    let newFolder = dialog.showOpenDialog({title: 'Folder selected', properties: ['openDirectory']});

    if (newFolder === undefined) {
      console.log('Error, please select the folder!');
    } else {
      return newFolder;
    }
  },
  openFolder: function() {
    let openFolder = dialog.showOpenDialog({title: 'Folder selected', properties: ['openDirectory']});

    if (openFolder === undefined) {
      console.log('Error, please select the folder!');
    } else {
      return openFolder;
    }
  },
  getDataFile: function(path) {
    return fs.readFileSync(path + '/' + nameFileDefault, 'utf8', function(err, data) {
      if (err) {
        console.log('Error: ' + err);
      }
      return data;
    });
  },
  saveFile: function(path, contentFile) {
    return fs.writeFileSync(path + '/' + nameFileDefault, JSON.stringify(contentFile), 'utf8', function(err, data) {
      if (err) {
        console.log('Error: ' + err);
      }
      return data;
    });
  }
};
