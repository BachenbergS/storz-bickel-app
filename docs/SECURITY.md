# Sicherheit

## Abhängigkeiten

- **Electron** (^40.1.0) - Runtime für Desktop-Apps
- **Electron-Builder** (^26.6.0) - Build-Tool für Pakete

## Sicherheitsmaßnahmen

```javascript
webPreferences: {
  nodeIntegration: false,
  contextIsolation: true,
  webSecurity: true,
  allowRunningInsecureContent: false
}
```

- **Context Isolation** - Trennung Electron/Web-Content
- **Node Integration deaktiviert** - Kein direkter Node.js-Zugriff
- **Content Security Policy** - Nur storz-bickel.com Ressourcen
- **Navigation-Schutz** - Externe Links im Browser
- **Web Bluetooth** - Explizite Berechtigungsabfragen

## Sicherheits-Audit

```bash
npm audit
npm update
```

## Wichtig: ELECTRON_RUN_AS_NODE

Diese Variable darf nicht gesetzt sein:

```bash
unset ELECTRON_RUN_AS_NODE
```

Das Start-Skript entfernt sie automatisch: `env -u ELECTRON_RUN_AS_NODE electron .`
