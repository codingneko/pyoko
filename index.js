const electron = require('electron');
const {app, BrowserWindow} = require('electron');

function createWindow () {
    let win = new BrowserWindow({
        width: 300,
        height: 300,
        resizable: false,
        x:0,
        y:780,
        alwaysOnTop:true,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.on('ready', createWindow);