const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  // Load Next.js app
  const startUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000' // Next.js dev server
      : `file://${path.join(__dirname, '../out/index.html')}`; // Static build

  mainWindow.loadURL(startUrl);

  mainWindow.on('closed', () => (mainWindow = null));
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
