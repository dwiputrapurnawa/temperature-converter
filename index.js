const electron = require('electron');
const {
    app,ipcMain,BrowserWindow,Menu
} = electron;
Menu.setApplicationMenu(false);
let home;

app.on('ready', () => {
    home = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: 'Temperature Converter',
        icon: 'src/img/temperature.png',
        width: 800,
        height: 500

    });

    home.loadURL(`file://${__dirname}/src/layout/index.html`)
    home.on('closed', () => {
        app.quit();
        home = null;
    });

});

ipcMain.on('request:log', event => {
    home.webContents.send('request:response')
})
