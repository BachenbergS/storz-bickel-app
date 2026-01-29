# Changelog

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

### Geplant
- Weitere Verbesserungen und Features

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
