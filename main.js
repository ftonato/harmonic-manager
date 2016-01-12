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
Menu.setApplicationMenu(menu);
