'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');
const ipc = require('ipc');

app.on('ready', function() {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './media/favicon.png'
  });
  mainWindow.loadUrl('file://' + __dirname + '/main.html');

  //mainWindow.openDevTools()

  let defaultWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false
  });

  ipc.on('toggle-about', function() {

    defaultWindow = new BrowserWindow({
      width: 400,
      height: 200,
      show: false,
      resizable: false
    });

    // Remove window menu
    defaultWindow.setMenu(null);

    defaultWindow.loadUrl('file://' + __dirname + '/pages/about.html');

    if (defaultWindow.isVisible()) {
      defaultWindow.hide();
    } else {
      defaultWindow.show();
    }
  });
});
