// Hinweis: In aktuellen Electron-Versionen kann 'require("electron")' von Node's Modulauflösung überschattet werden.
// 'node:electron' stellt sicher, dass das eingebaute Electron-Modul verwendet wird.
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Aktiviert experimentelle Web-Plattform-Features (u. a. Web Bluetooth)
app.commandLine.appendSwitch('enable-experimental-web-platform-features');
// Aktiviert Chromium-Features für Web Bluetooth
app.commandLine.appendSwitch('enable-features', 'Bluetooth,WebBluetooth,NewWebBluetoothPermissionsBackend,WebBluetoothScanning');
// Aktiviert Blink-Features explizit
app.commandLine.appendSwitch('enable-blink-features', 'WebBluetooth,WebBluetoothScanning');


let mainWindow;

function createWindow() {
  // Erstelle das Browser-Fenster
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      // Aktiviert experimentelle Blink-Features (u. a. Web Bluetooth)
      experimentalFeatures: true,
      enableBlinkFeatures: 'WebBluetooth,WebBluetoothScanning'
    },
    autoHideMenuBar: false,
    title: 'Storz & Bickel'
  });

  // Setze User-Agent auf Windows Chrome, um UA-basierte Linux-Blockaden der Web-App zu umgehen
  mainWindow.webContents.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // Lade die Web-App direkt (iframe wird oft durch CSP/X-Frame-Options blockiert)
  mainWindow.loadURL('https://app.storz-bickel.com/');

  // Web Bluetooth Berechtigungen erlauben
  const ses = mainWindow.webContents.session;
  ses.setPermissionRequestHandler((webContents, permission, callback, details) => {
    console.log('Permission requested:', permission, details);
    if (permission === 'bluetooth' || permission === 'bluetoothDevices' || permission === 'bluetoothScanning') {
      callback(true);
    } else {
      callback(false);
    }
  });
  if (ses.setPermissionCheckHandler) {
    ses.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
      console.log('Permission check:', permission, requestingOrigin);
      if (permission === 'bluetooth' || permission === 'bluetoothDevices' || permission === 'bluetoothScanning') {
        return true;
      }
      return false;
    });
  }
  
  // Setze Device Permissions für Bluetooth
  ses.setDevicePermissionHandler((details) => {
    console.log('Device permission requested:', details);
    if (details.deviceType === 'bluetooth') {
      return true;
    }
    return false;
  });

  // Überschreibe UA- und Client Hints für alle Requests
  ses.webRequest.onBeforeSendHeaders((details, callback) => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    details.requestHeaders['User-Agent'] = ua;
    details.requestHeaders['Sec-CH-UA-Platform'] = '"Windows"';
    details.requestHeaders['sec-ch-ua-platform'] = '"Windows"';
    callback({ requestHeaders: details.requestHeaders });
  });

  // Zeige den nativen Chromium-Geräteauswahldialog (kein eigenes preventDefault)
  // Falls Sie eine eigene Auswahl möchten, können Sie diesen Handler implementieren und eine UI anzeigen.
  // mainWindow.webContents.on('select-bluetooth-device', (event, details, callback) => { /* eigene Auswahl */ });


  // Überschreibe navigator.platform und navigator.userAgentData im Seitenscope
  mainWindow.webContents.on('dom-ready', () => {
    mainWindow.webContents.executeJavaScript(`
      try {
        Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });
        if (navigator.userAgentData) {
          const brands = navigator.userAgentData.brands || [];
          Object.defineProperty(navigator, 'userAgentData', {
            get: () => ({ brands, mobile: false, platform: 'Windows' })
          });
        }
      } catch (e) { console.error('UA override failed', e); }
    `);
  });


  mainWindow.webContents.on('select-bluetooth-device', (event, details, callback) => {
    // Kein preventDefault -> integrierter Geräteauswahldialog von Chromium
  });

  // Erstelle ein einfaches Menü
  const template = [
    {
      label: 'Datei',
      submenu: [
        {
          label: 'Startseite',
          accelerator: 'Alt+Home',
          click: () => {
            mainWindow.loadURL('https://app.storz-bickel.com/');
          }
        },
        { type: 'separator' },
        {
          label: 'Neu laden',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            mainWindow.reload();
          }
        },
        {
          label: 'Vollbild umschalten',
          accelerator: 'F11',
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        },
        { type: 'separator' },
        {
          label: 'Beenden',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Bearbeiten',
      submenu: [
        { label: 'Rückgängig', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
        { label: 'Wiederholen', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
        { type: 'separator' },
        { label: 'Ausschneiden', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Kopieren', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Einfügen', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { label: 'Alles auswählen', accelerator: 'CmdOrCtrl+A', role: 'selectAll' }
      ]
    },
    {
      label: 'Ansicht',
      submenu: [
        {
          label: 'Entwicklertools',
          accelerator: 'CmdOrCtrl+Shift+I',
          click: () => {
            mainWindow.webContents.toggleDevTools();
          }
        },
        { type: 'separator' },
        { label: 'Vergrößern', accelerator: 'CmdOrCtrl+Plus', role: 'zoomIn' },
        { label: 'Verkleinern', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
        { label: 'Zurücksetzen', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' }
      ]
    },
    {
      label: 'Hilfe',
      submenu: [
        {
          label: 'Über',
          click: () => {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Über Storz & Bickel',
              message: 'Storz & Bickel Desktop App',
              detail: 'Version 1.0.0\n\nInoffizielle Desktop-Anwendung für die Storz & Bickel Web-App.'
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // Öffne DevTools im Entwicklungsmodus (optional)
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Verhindere Navigation zu externen URLs (Sicherheit)
  // Erlaube nur Navigation innerhalb der Storz & Bickel Domain
  mainWindow.webContents.on('will-navigate', (event, url) => {
    const allowedDomains = ['app.storz-bickel.com', 'storz-bickel.com'];
    const urlObj = new URL(url);
    
    // Externe Domains im Browser öffnen
    if (!allowedDomains.some(domain => urlObj.hostname.includes(domain))) {
      event.preventDefault();
      require('electron').shell.openExternal(url);
    }
    // Interne Navigation erlauben (für SPA-Routing)
  });

  // Öffne neue Fenster (target="_blank") im Standard-Browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    const allowedDomains = ['app.storz-bickel.com', 'storz-bickel.com'];
    const urlObj = new URL(url);
    
    // Nur externe Links im Browser öffnen
    if (!allowedDomains.some(domain => urlObj.hostname.includes(domain))) {
      require('electron').shell.openExternal(url);
      return { action: 'deny' };
    }
    
    // Interne Links in der App öffnen
    return { action: 'allow' };
  });
}

// Diese Methode wird aufgerufen, wenn Electron fertig initialisiert ist
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // Auf macOS ist es üblich, ein Fenster neu zu erstellen, wenn
    // auf das Dock-Icon geklickt wird und keine anderen Fenster offen sind
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Beende die App, wenn alle Fenster geschlossen sind (außer auf macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Behandle Zertifikatsfehler (nur für Entwicklung)
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  // In Produktion sollte dies entfernt oder strenger gehandhabt werden
  event.preventDefault();
  callback(true);
});
