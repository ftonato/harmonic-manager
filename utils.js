var fs = require('fs');
var remote = require('remote');
var dialog = remote.require('dialog');

var nameFileDefault = 'harmonic.json';

module.exports = {
  newInit: function () {
    //alert('NEW INIT');

    var newFolder = dialog.showOpenDialog({title: 'Folder selected', properties: ['openDirectory']});

    if (newFolder === undefined) {
      console.log('Error, please select the folder!');
    } else {
      return newFolder;
    }
  },
  openFolder: function () {
    var openFolder = dialog.showOpenDialog({title: 'Folder selected', properties: ['openDirectory']});

    if (openFolder === undefined) {
      console.log('Error, please select the folder!');
    } else {
      return openFolder;
    }
  },
  getDataFile: function (path) {
    return fs.readFileSync(path + '/' + nameFileDefault, 'utf8', function (err, data) {
      if (err) {
        console.log('Error: ' + err);
      }
      return data;
    });
  },
  saveFile: function (path, contentFile) {
    return fs.writeFileSync(path + '/' + nameFileDefault, JSON.stringify(contentFile), 'utf8', function (err, data) {
      if (err) {
        console.log('Error: ' + err);
      }
      return data;
    });
  }
};
