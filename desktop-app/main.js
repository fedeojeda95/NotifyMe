const { app, BrowserWindow, shell } = require('electron');
const process = require('process');

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 600;

const MIN_WINDOW_WIDTH = 400;

function isDev() {
  return process.argv[2] == '--dev';
}

function createWindow() {
  // Create the browser window.
  const window = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    minWidth: MIN_WINDOW_WIDTH,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.webContents.on('new-window', function (e, url) {
    e.preventDefault();
    shell.openExternal(url);
  });

  return window;
}

function createDevApp() {
  const window = createWindow();
  window.loadFile('./static/dev/index.html');
}

function createProdApp() {
  const window = createWindow();
  window.loadFile('./dist/index.html');
}

app.whenReady().then(() => {
  if (isDev()) {
    createDevApp();
  } else {
    createProdApp();
  }
});
