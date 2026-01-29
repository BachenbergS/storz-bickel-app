# Storz & Bickel Desktop App für Linux

Eine inoffizielle Desktop-Anwendung für die Storz & Bickel Web-App (https://app.storz-bickel.com/), erstellt mit Electron.

## 🚀 Schnellstart

```bash
# Abhängigkeiten installieren
npm install

# App starten
npm start
```

Für detaillierte Anweisungen siehe [QUICKSTART.md](QUICKSTART.md).

## ✨ Features

- 🖥️ Native Desktop-Anwendung für Linux
- 🔒 Sichere Implementierung mit Context Isolation
- 🌐 Vollständiger Zugriff auf alle Web-App-Funktionen
- 🔵 Web Bluetooth Unterstützung für Gerätesteuerung
- ⌨️ Tastenkombinationen und Menüs
- 📦 Mehrere Installationsformate (AppImage, DEB, RPM, Flatpak)

## 📋 Voraussetzungen

- Node.js (Version 20 oder höher)
- npm
- Linux-Betriebssystem

## 📦 Installation

### Entwicklungsmodus

```bash
# Repository klonen
git clone git@github.com:BachenbergS/storz-bickel-app.git
cd storz-bickel-app

# Abhängigkeiten installieren
npm install

# App starten
npm start
```

### Produktions-Build

#### Electron-Builder (AppImage, DEB, RPM)

```bash
# Alle Linux-Formate bauen
npm run build

# Nur AppImage
npm run build:appimage

# Nur DEB-Paket
npm run build:deb

# Nur RPM-Paket
npm run build:rpm
```

Die fertigen Pakete finden Sie im `dist/` Verzeichnis.

#### Flatpak

Für Flatpak-Installation siehe [FLATPAK.md](FLATPAK.md).

```bash
# Flatpak bauen und installieren
./build-flatpak.sh
flatpak-builder --user --install --force-clean build-dir org.storzbickel.app.yml

# Flatpak ausführen
flatpak run org.storzbickel.app
```

## ⌨️ Tastenkombinationen

- **Ctrl+R** - Seite neu laden
- **F11** - Vollbildmodus umschalten
- **Ctrl+Q** - Anwendung beenden
- **Ctrl+Shift+I** - Entwicklertools öffnen
- **Ctrl+Plus** - Vergrößern
- **Ctrl+Minus** - Verkleinern
- **Ctrl+0** - Zoom zurücksetzen

## 📁 Projektstruktur

```
storz-bickel-app/
├── main.js                          # Haupt-Electron-Prozess
├── preload.js                       # Preload-Script für Sicherheit
├── index.html                       # HTML-Wrapper für die Web-App
├── package.json                     # Projekt-Konfiguration
├── build-flatpak.sh                 # Flatpak Build-Skript
├── org.storzbickel.app.yml          # Flatpak-Manifest
├── org.storzbickel.app.desktop      # Desktop-Integration
├── org.storzbickel.app.metainfo.xml # AppStream-Metadaten
├── screenshot.png                   # App-Screenshot
├── assets/
│   ├── icon.png                     # App-Icon (512x512)
│   └── README.md                    # Icon-Dokumentation
├── README.md                        # Diese Datei
├── QUICKSTART.md                    # Schnellstart-Anleitung
├── FLATPAK.md                       # Flatpak-Dokumentation
└── SECURITY.md                      # Sicherheits-Informationen
```

## 🔒 Sicherheit

Die App implementiert mehrere Sicherheitsmaßnahmen:

- **Context Isolation**: Trennung zwischen Electron und Web-Content
- **Node Integration deaktiviert**: Verhindert direkten Zugriff auf Node.js-APIs
- **Content Security Policy**: Beschränkt erlaubte Ressourcen
- **Navigation-Schutz**: Externe Links werden im Standard-Browser geöffnet
- **Web Bluetooth**: Sichere Bluetooth-Kommunikation mit Berechtigungsabfrage

Für Details siehe [SECURITY.md](SECURITY.md).

## 🔧 Fehlerbehebung

### App startet nicht
- Überprüfen Sie, ob alle Abhängigkeiten installiert sind: `npm install`
- Löschen Sie `node_modules` und installieren Sie neu: `rm -rf node_modules && npm install`
- Stellen Sie sicher, dass `ELECTRON_RUN_AS_NODE` nicht gesetzt ist: `unset ELECTRON_RUN_AS_NODE`

### Web-App lädt nicht
- Überprüfen Sie Ihre Internetverbindung
- Stellen Sie sicher, dass https://app.storz-bickel.com/ erreichbar ist
- Öffnen Sie die Entwicklertools (Ctrl+Shift+I) für weitere Informationen

### Bluetooth funktioniert nicht
- Stellen Sie sicher, dass Ihr Bluetooth-Adapter aktiviert ist
- Prüfen Sie die Bluetooth-Berechtigungen
- Bei Flatpak: `flatpak override --user --device=all org.storzbickel.app`

### Build schlägt fehl
- Stellen Sie sicher, dass Sie Node.js 20+ verwenden
- Installieren Sie Build-Tools: `sudo apt-get install build-essential` (Debian/Ubuntu)

## 🛠️ Entwicklung

### Entwicklertools aktivieren

Entkommentieren Sie in [`main.js`](main.js) die folgende Zeile in der `createWindow()` Funktion:

```javascript
mainWindow.webContents.openDevTools();
```

### Weitere Anpassungen

- **Fenstergröße**: Ändern Sie `width` und `height` in der `BrowserWindow` Konfiguration in [`main.js`](main.js)
- **Menü**: Passen Sie das Menü-Template in der `createWindow()` Funktion in [`main.js`](main.js) an
- **Web Bluetooth Flags**: Konfigurieren Sie die `commandLine.appendSwitch()` Aufrufe am Anfang von [`main.js`](main.js)

## 📚 Dokumentation

- [QUICKSTART.md](QUICKSTART.md) - Schnellstart-Anleitung für Einsteiger
- [FLATPAK.md](FLATPAK.md) - Flatpak-Build und Installation
- [SECURITY.md](SECURITY.md) - Sicherheitsüberlegungen und Abhängigkeiten
- [assets/README.md](assets/README.md) - Icon-Dokumentation

## ⚠️ Hinweise

- Dies ist eine **inoffizielle** Desktop-Anwendung
- Die App ist ein Wrapper um die offizielle Web-App von Storz & Bickel
- Alle Funktionen und Inhalte gehören Storz & Bickel
- Für Support zur Web-App selbst wenden Sie sich bitte an Storz & Bickel

## 📄 Lizenz

MIT License - Siehe [LICENSE](LICENSE) für Details

## 🤝 Beitragen

Verbesserungsvorschläge und Pull Requests sind willkommen!

## 📧 Kontakt

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im Repository: https://github.com/BachenbergS/storz-bickel-app
