var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadUrl('file://' + __dirname + '/main.html');
  
  //mainWindow.openDevTools()

  var defaultWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false
  });

  ipc.on('toggle-about', function () {

    defaultWindow = new BrowserWindow({
      width: 400,
      height: 200,
      show: false,
      resizable: false
    })

    // Remove window menu
    defaultWindow.setMenu(null)

    defaultWindow.loadUrl('file://' + __dirname + '/pages/about.html');
    
    if (defaultWindow.isVisible())
      defaultWindow.hide();
    else
      defaultWindow.show();
  })
})
