const { app, BrowserWindow } = require('electron');
const process = require('process');

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 600;

function isDev() {
  return process.argv[2] == '--dev';
}

function createWindow() {
  // Create the browser window.
  let window = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    webPreferences: {
      nodeIntegration: true,
    },
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
