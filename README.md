# Storz & Bickel Desktop App für Linux

Eine inoffizielle Desktop-Anwendung für die Storz & Bickel Web-App (https://app.storz-bickel.com/), erstellt mit Electron.

## Features

- 🖥️ Native Desktop-Anwendung für Linux
- 🔒 Sichere Implementierung mit Context Isolation
- 🌐 Vollständiger Zugriff auf alle Web-App-Funktionen
- ⌨️ Tastenkombinationen und Menüs
- 📦 Mehrere Installationsformate (AppImage, DEB, RPM)

## Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn
- Linux-Betriebssystem

## Installation

### 1. Repository klonen oder Dateien herunterladen

```bash
cd ~/Code/storz-bickel-app
```

### 2. Abhängigkeiten installieren

```bash
npm install
```

## Verwendung

### Entwicklungsmodus starten

```bash
npm start
```

Dies startet die Anwendung im Entwicklungsmodus. Die App lädt die Storz & Bickel Web-App in einem Electron-Fenster.

### Produktions-Build erstellen

#### Alle Linux-Formate bauen:
```bash
npm run build
```

#### Nur AppImage bauen:
```bash
npm run build:appimage
```

#### Nur DEB-Paket bauen:
```bash
npm run build:deb
```

#### Nur RPM-Paket bauen:
```bash
npm run build:rpm
```

Die fertigen Pakete finden Sie im `dist/` Verzeichnis.

## Installation der gebauten App

### AppImage
```bash
chmod +x dist/Storz-\&-Bickel-*.AppImage
./dist/Storz-\&-Bickel-*.AppImage
```

### DEB (Debian/Ubuntu)
```bash
sudo dpkg -i dist/storz-bickel-app_*.deb
```

### RPM (Fedora/RHEL/CentOS)
```bash
sudo rpm -i dist/storz-bickel-app-*.rpm
```

## Tastenkombinationen

- **Ctrl+R** - Seite neu laden
- **F11** - Vollbildmodus umschalten
- **Ctrl+Q** - Anwendung beenden
- **Ctrl+Shift+I** - Entwicklertools öffnen
- **Ctrl+Plus** - Vergrößern
- **Ctrl+Minus** - Verkleinern
- **Ctrl+0** - Zoom zurücksetzen

## Projektstruktur

```
storz-bickel-app/
├── main.js           # Haupt-Electron-Prozess
├── preload.js        # Preload-Script für Sicherheit
├── index.html        # HTML-Wrapper für die Web-App
├── package.json      # Projekt-Konfiguration
├── .gitignore        # Git-Ignore-Datei
├── assets/           # Icons und andere Assets
│   └── icon.png      # App-Icon (512x512 empfohlen)
└── README.md         # Diese Datei
```

## Icon hinzufügen

Um ein eigenes Icon zu verwenden:

1. Erstellen Sie ein PNG-Bild mit 512x512 Pixeln
2. Speichern Sie es als `assets/icon.png`
3. Bauen Sie die App neu

Alternativ können Sie das Storz & Bickel Logo verwenden oder ein generisches Icon erstellen.

## Sicherheit

Die App implementiert mehrere Sicherheitsmaßnahmen:

- **Context Isolation**: Trennung zwischen Electron und Web-Content
- **Node Integration deaktiviert**: Verhindert direkten Zugriff auf Node.js-APIs
- **Content Security Policy**: Beschränkt erlaubte Ressourcen
- **Navigation-Schutz**: Externe Links werden im Standard-Browser geöffnet

## Fehlerbehebung

### App startet nicht
- Überprüfen Sie, ob alle Abhängigkeiten installiert sind: `npm install`
- Löschen Sie `node_modules` und installieren Sie neu: `rm -rf node_modules && npm install`

### Web-App lädt nicht
- Überprüfen Sie Ihre Internetverbindung
- Stellen Sie sicher, dass https://app.storz-bickel.com/ erreichbar ist
- Öffnen Sie die Entwicklertools (Ctrl+Shift+I) für weitere Informationen

### Build schlägt fehl
- Stellen Sie sicher, dass Sie die neueste Version von Node.js verwenden
- Installieren Sie Build-Tools: `sudo apt-get install build-essential` (Debian/Ubuntu)

## Hinweise

- Dies ist eine **inoffizielle** Desktop-Anwendung
- Die App ist ein Wrapper um die offizielle Web-App von Storz & Bickel
- Alle Funktionen und Inhalte gehören Storz & Bickel
- Für Support zur Web-App selbst wenden Sie sich bitte an Storz & Bickel

## Lizenz

MIT License - Siehe LICENSE-Datei für Details

## Entwicklung

### Entwicklertools aktivieren

Entkommentieren Sie in [`main.js`](main.js:82) die folgende Zeile:

```javascript
mainWindow.webContents.openDevTools();
```

### Weitere Anpassungen

- **Fenstergröße**: Ändern Sie `width` und `height` in [`main.js`](main.js:9)
- **Menü**: Passen Sie das Menü-Template in [`main.js`](main.js:24) an
- **Styling**: Bearbeiten Sie die Styles in [`index.html`](index.html:10)

## Beitragen

Verbesserungsvorschläge und Pull Requests sind willkommen!

## Kontakt

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im Repository.
