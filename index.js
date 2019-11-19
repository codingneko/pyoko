const electron = require('electron');
const {app, BrowserWindow, Menu, Tray} = require('electron');
const path = require("path");
let iconPath = path.join(__dirname, 'icons', 'icon.ico');

function boot() {
    createTrayIcon();

    let character = new BrowserWindow({
        width: 300,
        height: 300,
        resizable: false,
        x:0,
        y:780,
        icon: iconPath,
        skipTaskbar: true,
        title: 'Pyoko',
        alwaysOnTop: true,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });    

    character.loadFile('character.html');
}

function createTrayIcon(){
    let trayIcon = new Tray(iconPath);
    
    let TrayContextMenu = Menu.buildFromTemplate([
        { 
            label: 'Configure', click:  function(){
                let configWindow = new BrowserWindow({
                    width: 600,
                    height: 800,
                    title: "Configure Pyoko",
                    icon: iconPath,
                    webPreferences: {
                        nodeIntegration: true
                    }
                });
                configWindow.loadFile("configure.html");
                //TODO: Build a configuration window
            }
        },
        { 
            label: 'Quit', click:  function(){
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);

    trayIcon.setContextMenu(TrayContextMenu);
    trayIcon.setToolTip('Pyoko');
    trayIcon.setTitle('Pyoko');

    return trayIcon;
}

app.on('ready', boot);