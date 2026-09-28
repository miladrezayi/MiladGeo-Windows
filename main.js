const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#101412',
    autoHideMenuBar: false,
    title: 'MiladGeo Windows v10',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.on('did-finish-load', () => {
    win.webContents.executeJavaScript(
      "document.documentElement.classList.add('desktop-windows')"
    ).catch(() => {});
  });
}

ipcMain.handle('miladgeo-save-file', async (_event, payload) => {
  const name = String(payload?.name || 'MILADGEO_EXPORT.bin').replace(/[\\/:*?"<>|]+/g, '_');
  const bytes = payload?.bytes;
  if (!Array.isArray(bytes)) throw new Error('Invalid file data');

  const result = await dialog.showSaveDialog({
    title: 'Save MiladGeo Export',
    defaultPath: name,
    buttonLabel: 'Save',
    properties: ['createDirectory', 'showOverwriteConfirmation']
  });
  if (result.canceled || !result.filePath) return false;

  fs.writeFileSync(result.filePath, Buffer.from(bytes));
  return true;
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
