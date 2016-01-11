var fs = require('fs');
var remote = require('remote');
var ipc = require('ipc');
var Menu = remote.require('menu');
var shell = require('shell');
var dialog = remote.require('dialog');

var config = require('./config.json');
var newFolder = null;
var defaultFolder = null;

var menu = Menu.buildFromTemplate([
{
  label: 'File',
  submenu: [
  {
    label: 'New',
    click: function () {
      newFolder = dialog.showOpenDialog({title: 'Folder selected', properties: ['openDirectory']});

      if (newFolder === undefined) {
        console.log('ERROR, please, SELECT THE FOLDER');
      } else {
        document.getElementById('default_folder_field').value = newFolder;
        document.getElementById('form-visible').style.display = 'block';

        alert('roda o comando HARMONIC INIT');
        getDataDefault(newFolder);
      }
    }
  },
  {
    label: 'Open',
    click: function () {
      defaultFolder = dialog.showOpenDialog({title: 'Folder selected', properties: ['openDirectory']});

      document.getElementById('default_folder_field').value = defaultFolder;

      alert('busca o arquivo (verifica se existe), se existir carrega os dados getDataDefault(), do contrário avisa o usuário');
    }
  },
  {
    label: 'Exit',
    click: function () {
      ipc.send('toggle-exit');
    }
  }
  ]
},
{
  label: 'Help',
  submenu: [
  {
    label: 'Harmonic',
    click: function () {

      shell.openExternal(config.external_urls.harmonic);
    }
  },
  {
    label: 'Twitter',
    click: function () {

      shell.openExternal(config.external_urls.twitter);
    }
  },
  {
    label: 'Changelog...',
    click: function () {

      shell.openExternal(config.external_urls.changelog);
    }
  },
  {
    label: 'About Harmonic Manager',
    click: function () {
      ipc.send('toggle-about');
    }
  }

  ]
}
]);
Menu.setApplicationMenu(menu)

function getDataDefault(path) {
  fs.readFile(path+'/harmonic.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    data = JSON.parse(data);

    document.getElementById("nameField").value  = data.name;
    document.getElementById("titleField").value = data.title;
    document.getElementById("subtitleField").value = data.subtitle;

    document.getElementById("descriptionField").value = data.description;
    document.getElementById("authorField").value = data.author;
    document.getElementById("bioField").value = data.bio;
    document.getElementById("domainField").value = data.domain;
  });
}
