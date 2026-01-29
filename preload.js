const { contextBridge, ipcRenderer } = require('electron');

// Exponiere sichere APIs an den Renderer-Prozess
contextBridge.exposeInMainWorld('electronAPI', {
  // Hier können bei Bedarf sichere APIs hinzugefügt werden
  platform: process.platform,
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron
  }
});

// Verhindere, dass die Web-App auf Node.js-APIs zugreift
window.addEventListener('DOMContentLoaded', () => {
  console.log('Storz & Bickel Desktop App geladen');
});
