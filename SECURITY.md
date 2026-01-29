# Sicherheit und Abhängigkeiten

## Benötigte Abhängigkeiten

Diese Electron-App benötigt nur zwei Haupt-Abhängigkeiten:

### 1. Electron (Runtime)
- **Zweck**: Framework für Desktop-Apps
- **Benötigt für**: Die App selbst auszuführen
- **Version**: ^35.7.5 (aktuellste sichere Version)
- **Kann nicht entfernt werden**: Ja, ist die Basis der App

### 2. Electron-Builder (Build-Tool)
- **Zweck**: Erstellt installierbare Pakete (AppImage, DEB, RPM)
- **Benötigt für**: Nur zum Bauen der Distributionspakete
- **Version**: ^26.6.0 (aktuellste Version)
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
  allowRunningInsecureContent: false  // Blockiert unsichere Inhalte
}
```

### Content Security Policy (CSP):
Die [`index.html`](index.html:5) enthält eine strenge CSP, die nur Ressourcen von storz-bickel.com erlaubt.

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
2. **Entfernen Sie die Zertifikatsfehler-Behandlung** in [`main.js`](main.js:115) (nur für Entwicklung)
3. **Deaktivieren Sie DevTools** in der Produktion
4. **Code-Signing**: Signieren Sie die App für zusätzliche Sicherheit

## Vergleich mit Alternativen

### Warum Electron?
- ✅ Etabliert und weit verbreitet
- ✅ Große Community und Support
- ✅ Einfache Web-App-Integration
- ❌ Größere Dateigröße (~150MB)

### Alternativen:
- **Tauri**: Leichtgewichtiger, aber komplexer Setup
- **NW.js**: Ähnlich wie Electron, weniger populär
- **Browser-Wrapper**: Minimalistisch, aber weniger Features

## Fazit

Die verwendeten Abhängigkeiten sind **notwendig und sicher** für eine Electron-App. Die Sicherheitswarnungen bei der Installation betreffen meist:

1. **Transitive Abhängigkeiten** (Abhängigkeiten von Abhängigkeiten)
2. **Build-Tools** (nicht in der finalen App enthalten)
3. **Bereits gepatchte Versionen** (durch Updates behoben)

Die App selbst implementiert Best Practices für Electron-Sicherheit.
