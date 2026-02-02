# Changelog

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

### Geplant
- macOS Support

## [1.0.3] - 2026-02-02

### Geändert
- Electron auf 40.1.0 aktualisiert (Chromium 144.0.7559.60, V8 14.4)
- Node.js auf 24.11.1 aktualisiert
- Flatpak Runtime von 23.08 auf 24.08 aktualisiert
- Behebt End-of-Life Warnungen bei Flatpak-Installation

## [1.0.2] - 2026-02-02

### Hinzugefügt
- AppImage Support (portabel, keine Installation nötig)
- Windows Support (NSIS Installer + Portable)
- Parallele Builds für alle Plattformen
- openSUSE in RPM-Dokumentation

### Geändert
- Workflow optimiert: Linux/Windows/Flatpak bauen parallel
- Release-Notes enthalten jetzt alle Plattformen

## [1.0.1] - 2026-02-02

### Sicherheit
- Node.js auf v22.22.0 aktualisiert (Security Release)
- PackageGate-Schutz: `ignore-scripts=true` in .npmrc
- CI/CD Pipeline auf Node.js 22.22.0 aktualisiert
- Lockfile-Konsistenz erzwungen
- Automatische Security Audits aktiviert

### Geändert
- `npm install` durch `npm ci` in Dokumentation ersetzt
- Flatpak Node.js Extension auf node22 aktualisiert

## [1.0.0] - 2026-01-29

### Hinzugefügt
- 🖥️ Native Desktop-Anwendung für Linux mit Electron
- 🔒 Sichere Implementierung mit Context Isolation
- 🌐 Vollständiger Zugriff auf alle Web-App-Funktionen von Storz & Bickel
- 🔵 Web Bluetooth Unterstützung für Gerätesteuerung
- ⌨️ Tastenkombinationen und Menüs (Ctrl+R, F11, Ctrl+Q, etc.)
- 📦 Mehrere Installationsformate:
  - AppImage
  - DEB-Paket
  - RPM-Paket
  - Flatpak
- 📚 Umfassende Dokumentation:
  - README.md mit vollständiger Projektübersicht
  - QUICKSTART.md für schnellen Einstieg
  - FLATPAK.md für Flatpak-spezifische Anweisungen
  - SECURITY.md mit Sicherheitsinformationen
- 🔧 Build-Skripte für alle Paketformate
- 🎨 App-Icon und Desktop-Integration
- 📸 Screenshot für AppStream-Metadaten

### Sicherheit
- Context Isolation aktiviert
- Node Integration deaktiviert
- Content Security Policy implementiert
- Navigation-Schutz für externe Links
- Sichere Web Bluetooth Implementierung mit Berechtigungsabfrage

[Unreleased]: https://github.com/BachenbergS/storz-bickel-app/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/BachenbergS/storz-bickel-app/releases/tag/v1.0.0
