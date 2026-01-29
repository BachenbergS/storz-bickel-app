# Sicherheit und Abhängigkeiten

## Benötigte Abhängigkeiten

Diese Electron-App benötigt nur zwei Haupt-Abhängigkeiten:

### 1. Electron (Runtime)
- **Zweck**: Framework für Desktop-Apps
- **Benötigt für**: Die App selbst auszuführen
- **Version**: ^40.1.0 (aktuelle Version mit Node.js 24.11.1)
- **Kann nicht entfernt werden**: Ja, ist die Basis der App

### 2. Electron-Builder (Build-Tool)
- **Zweck**: Erstellt installierbare Pakete (AppImage, DEB, RPM)
- **Benötigt für**: Nur zum Bauen der Distributionspakete
- **Version**: ^26.6.0 (aktuelle Version)
- **Kann entfernt werden**: Ja, wenn Sie nur `npm start` verwenden

## Sicherheitsüberlegungen

### Warum diese Abhängigkeiten sicher sind:

1. **Electron**: Wird von Microsoft/GitHub entwickelt und ist weit verbreitet (VS Code, Slack, Discord nutzen es)
2. **Electron-Builder**: Standard-Tool zum Paketieren von Electron-Apps
3. **Beide sind aktiv gewartet** und erhalten regelmäßige Sicherheitsupdates

### Implementierte Sicherheitsmaßnahmen in der App:

```javascript
// In main.js:
webPreferences: {
  nodeIntegration: false,        // Verhindert Node.js-Zugriff aus Web-Content
  contextIsolation: true,        // Isoliert Electron-APIs vom Web-Content
  webSecurity: true,             // Aktiviert Web-Sicherheit
  allowRunningInsecureContent: false,  // Blockiert unsichere Inhalte
  preload: path.join(__dirname, 'preload.js')  // Sicherer Preload-Script
}
```

### Web Bluetooth Sicherheit:

Die App implementiert Web Bluetooth mit expliziten Berechtigungsabfragen:

```javascript
// Bluetooth-Berechtigungen werden pro Anfrage geprüft
ses.setPermissionRequestHandler((webContents, permission, callback) => {
  if (permission === 'bluetooth' || permission === 'bluetoothDevices') {
    callback(true);  // Erlaubt nach Benutzerbestätigung
  } else {
    callback(false);
  }
});
```

### Content Security Policy (CSP):

Die [`index.html`](index.html) enthält eine strenge CSP, die nur Ressourcen von storz-bickel.com erlaubt.

### Navigation-Schutz:

Externe Links werden automatisch im Standard-Browser geöffnet, nicht in der App.

## Alternative: Minimale Installation

Wenn Sie `electron-builder` nicht benötigen (nur Entwicklung, kein Build):

### Option 1: Nur Electron installieren
```bash
npm install --save-dev electron
```

Dann können Sie die App mit `npm start` ausführen, aber keine Installationspakete erstellen.

### Option 2: Electron direkt ausführen (ohne npm)
```bash
# Electron global installieren
npm install -g electron

# App direkt starten
electron .
```

## Sicherheits-Audit

Führen Sie regelmäßig ein Audit durch:

```bash
npm audit
```

Aktualisieren Sie Pakete:

```bash
npm update
```

## Produktions-Empfehlungen

Für den produktiven Einsatz:

1. **Verwenden Sie die neuesten Versionen** von Electron und electron-builder
2. **Deaktivieren Sie DevTools** in der Produktion (entfernen Sie `openDevTools()` Aufrufe)
3. **Code-Signing**: Signieren Sie die App für zusätzliche Sicherheit
4. **Testen Sie Web Bluetooth** gründlich mit Ihren Geräten

## Wichtige Umgebungsvariable

### ELECTRON_RUN_AS_NODE

Diese Umgebungsvariable **darf nicht gesetzt sein**, da sie Electron im Node-Modus statt im Browser-Modus startet. Das Start-Skript in [`package.json`](package.json) entfernt diese Variable automatisch:

```json
"start": "env -u ELECTRON_RUN_AS_NODE electron ."
```

Falls die App nicht startet, prüfen Sie:
```bash
echo $ELECTRON_RUN_AS_NODE  # Sollte leer sein
unset ELECTRON_RUN_AS_NODE  # Falls gesetzt
```

## Vergleich mit Alternativen

### Warum Electron?
- ✅ Etabliert und weit verbreitet
- ✅ Große Community und Support
- ✅ Einfache Web-App-Integration
- ✅ Web Bluetooth Unterstützung
- ❌ Größere Dateigröße (~150MB)

### Alternativen:
- **Tauri**: Leichtgewichtiger, aber komplexer Setup und eingeschränkte Web-API-Unterstützung
- **NW.js**: Ähnlich wie Electron, weniger populär
- **Browser-Wrapper**: Minimalistisch, aber weniger Features und keine Web Bluetooth Unterstützung

## Flatpak-Sicherheit

Bei Verwendung als Flatpak:
- Flatpak bietet zusätzliche Sandbox-Isolation
- Electron's eigene Sandbox wird mit `--no-sandbox` deaktiviert (Flatpak übernimmt)
- Bluetooth-Zugriff erfordert explizite Berechtigungen im Manifest
- System-D-Bus-Zugriff für Bluetooth (`org.bluez`)

## Fazit

Die verwendeten Abhängigkeiten sind **notwendig und sicher** für eine Electron-App. Die Sicherheitswarnungen bei der Installation betreffen meist:

1. **Transitive Abhängigkeiten** (Abhängigkeiten von Abhängigkeiten)
2. **Build-Tools** (nicht in der finalen App enthalten)
3. **Bereits gepatchte Versionen** (durch Updates behoben)

Die App selbst implementiert Best Practices für Electron-Sicherheit und Web Bluetooth.
