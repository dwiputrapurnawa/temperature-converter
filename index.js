const electron = require('electron');
const {
    app,ipcMain,BrowserWindow,Menu
} = electron;
Menu.setApplicationMenu(false);

app.on('ready', () => {
    let home = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: 'Temperature Converter',
        icon: 'temperature.png'
    
    });

    home.loadURL(`file://${__dirname}/index.html`)
    home.on('closed', () => {
        app.quit();
        home = null;
    });

});