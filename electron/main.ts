import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

/**
 *
 */
let mainWindow: Electron.BrowserWindow | null;

/**
 * Create a new Window
 */
function createWindow() {
  //  Create new electron instance
  mainWindow = new BrowserWindow({ height: 600, width: 800 });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'todo/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  //Open Devtools
  mainWindow.webContents.openDevTools;

  //Handling close button
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    app.quit;
  }
});
