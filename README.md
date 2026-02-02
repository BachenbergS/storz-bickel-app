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

- 🖥️ Native Desktop-Anwendung für Linux
- 🔒 Sichere Implementierung mit Context Isolation
- 🔵 Web Bluetooth Unterstützung für Gerätesteuerung
- 📦 Mehrere Installationsformate (AppImage, DEB, RPM, Flatpak)

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
# Alle Formate
npm run build

# Einzelne Formate
npm run build:appimage
npm run build:deb
npm run build:rpm
npm run build:flatpak
```

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
