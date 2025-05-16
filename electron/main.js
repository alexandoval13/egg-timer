const { app, BrowserWindow } = require('electron');
const path = require('path');
const net = require('net');

let mainWindow;

const waitForNextJs = (port = 3000, host = 'localhost') => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const socket = new net.Socket();
      socket.connect(port, host, () => {
        clearInterval(interval);
        socket.destroy();
        resolve(true);
      });
      socket.on('error', () => socket.destroy());
    }, 1000);
  });
};

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 580,
    height: 640,
    maxWidth: 580,
    maxHeight: 640,
    minWidth: 420,
    minHeight: 480,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  let startUrl;

  if (process.env.NODE_ENV === 'development') {
    await waitForNextJs();
    startUrl = 'http://localhost:3000'; // Next.js dev server
  } else {
    startUrl = `file://${path.join(__dirname, '../out/index.html')}`; // Static build
  }

  mainWindow.loadURL(startUrl);

  // Ensure content is fully loaded before interacting with the window
  mainWindow.webContents.once('did-finish-load', () => {
    console.log('Content fully loaded');
    mainWindow.show();
  });

  mainWindow.on('closed', () => (mainWindow = null));
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
