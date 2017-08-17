const {app, BrowserWindow, crashReporter} = require('electron');

crashReporter.start({
 productName: 'PresupuestoApp',
 companyName: 'Monopolio',
 submitURL: 'http://localhost:3000/api/app-crashes',
 uploadToServer: true
});

let mainWindow;

function createWindow () {
    // create the browser window
    mainWindow = new BrowserWindow({width: 800, height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true 
        },
        showDvTools:true
    });
    // render index.html which will contain our root Vue component
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    console.log(__dirname);

    // dereference the mainWindow object when the window is closed
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}


// call the createWindow() method when Electron has finished initializing
app.on('ready', createWindow);

// when all windows are closed, quit the application on Windows/Linux
app.on('window-all-closed', function () {
    // only quit the application on OS X if the user hits cmd + q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // re-create the mainWindow if the dock icon is clicked in OS X and no other
    // windows were open
    if (mainWindow === null) {
        createWindow();
    }
});

process.on('uncaughtException', function (err) {
  console.log(err);
})
