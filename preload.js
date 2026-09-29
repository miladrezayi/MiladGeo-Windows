const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('miladgeoNative', {
  saveFile: (payload) => ipcRenderer.invoke('miladgeo-save-file', payload)
});
