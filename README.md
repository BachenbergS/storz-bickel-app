# Storz & Bickel Desktop App für Linux

Eine inoffizielle Desktop-Anwendung für die Storz & Bickel Web-App (https://app.storz-bickel.com/), erstellt mit Electron.

## 🚀 Schnellstart

```bash
# Abhängigkeiten installieren
npm ci

# App starten
npm start
```

## ✨ Features

- 🖥️ Native Desktop-Anwendung für Linux & Windows
- 🔒 Sichere Implementierung mit Context Isolation
- 🔵 Web Bluetooth Unterstützung für Gerätesteuerung
- 📦 Mehrere Installationsformate:
  - **Linux:** AppImage, DEB, RPM, Flatpak
  - **Windows:** Installer (NSIS), Portable

## 📦 Installation

### Entwicklung

```bash
git clone git@github.com:BachenbergS/storz-bickel-app.git
cd storz-bickel-app
npm install
npm start
```

### Build

```bash
# Linux - Alle Formate
npm run build

# Einzelne Formate
npm run build:appimage  # AppImage (portabel)
npm run build:deb       # Debian/Ubuntu
npm run build:rpm       # Fedora/RHEL/openSUSE
npm run build:flatpak   # Flatpak (universal)

# Windows (auf Windows-System oder mit Wine)
npm run build           # NSIS Installer + Portable
```

### Versionen aktualisieren

Das Projekt nutzt zentrale Versionsdateien:

- **`.node-version`** - Node.js Version für Entwicklung und CI/CD
- **`.flatpak-runtime-version`** - Flatpak Runtime Version (freedesktop.org Platform)

Die Build-Skripte lesen diese Dateien automatisch und passen die Konfiguration entsprechend an.

## ⌨️ Tastenkombinationen

- **Ctrl+R** - Neu laden
- **F11** - Vollbild
- **Ctrl+Q** - Beenden
- **Ctrl+Shift+I** - DevTools

## 📚 Dokumentation

- [docs/QUICKSTART.md](docs/QUICKSTART.md) - Detaillierte Anleitung
- [docs/FLATPAK.md](docs/FLATPAK.md) - Flatpak-Installation
- [docs/SECURITY.md](docs/SECURITY.md) - Sicherheitsinformationen
- [docs/CHANGELOG.md](docs/CHANGELOG.md) - Versionshistorie

## ⚠️ Hinweise

Dies ist eine **inoffizielle** Desktop-Anwendung. Die App ist ein Wrapper um die offizielle Web-App von Storz & Bickel.

## 📄 Lizenz

MIT License - Siehe [LICENSE](LICENSE)
