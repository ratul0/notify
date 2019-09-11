const {app, BrowserWindow} = require('electron');

let win;

function createMainWindow(){
    win = new BrowserWindow({
        height: 800,
        width: 1200
    });
    win.loadURL(`file://${__dirname}/renderer/index.html`);
    win.on('ready-to-show', ()=> {
        win.show();
    })
}

app.on('ready', () => {
    createMainWindow();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow()
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});