const { app, BrowserWindow, Menu } = require('electron');

app.whenReady().then(() => {

    // create a window
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // load a webpage
    myWindow.loadFile('index.html');

    // add icon into app tray
    const tray = new Tray('/my-icon');

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Cool', type: 'radio' },
    ]);

    tray.setTootTip('Electron');

});
