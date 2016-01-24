'use strict';
const fs = require('fs');
const remote = require('remote');
const ipc = require('ipc');
const Menu = remote.require('menu');
const shell = require('shell');
const dialog = remote.require('dialog');

const config = require('./config.json');
let newFolder = null;
let defaultFolder = null;

let menu = Menu.buildFromTemplate([
{
  label: 'Help',
  submenu: [
  {
    label: 'Harmonic',
    click: function() {

      shell.openExternal(config.externalUrls.harmonic);
    }
  },
  {
    label: 'Twitter',
    click: function() {

      shell.openExternal(config.externalUrls.twitter);
    }
  },
  {
    label: 'Changelog...',
    click: function() {

      shell.openExternal(config.externalUrls.changelog);
    }
  },
  {
    label: 'About Harmonic Manager',
    click: function() {
      ipc.send('toggle-about');
    }
  }
  ]
}
]);
Menu.setApplicationMenu(menu);
