# 🎉 Storz & Bickel Desktop App v1.0.0

Willkommen zum ersten offiziellen Release der **Storz & Bickel Desktop App für Linux**!

Dies ist eine inoffizielle Desktop-Anwendung, die die offizielle Storz & Bickel Web-App (https://app.storz-bickel.com/) als native Linux-Anwendung bereitstellt.

## ✨ Features

### 🖥️ Native Desktop-Integration
- Vollwertige Linux-Desktop-Anwendung mit Electron
- Systemweite Installation über DEB, RPM oder Flatpak
- Desktop-Icon und Menü-Integration
- Optimierte Fenstergröße und -verwaltung

### 🔵 Web Bluetooth Unterstützung
- Direkte Bluetooth-Verbindung zu Storz & Bickel Geräten
- Sichere Implementierung mit Berechtigungsabfrage
- Volle Gerätesteuerung über die Desktop-App

### 🔒 Sicherheit
- **Context Isolation** aktiviert - Trennung zwischen Electron und Web-Content
- **Node Integration deaktiviert** - Verhindert direkten Zugriff auf Node.js-APIs
- **Content Security Policy** - Beschränkt erlaubte Ressourcen
- **Navigation-Schutz** - Externe Links werden im Standard-Browser geöffnet

### ⌨️ Tastenkombinationen
- **Ctrl+R** - Seite neu laden
- **F11** - Vollbildmodus umschalten
- **Ctrl+Q** - Anwendung beenden
- **Ctrl+Shift+I** - Entwicklertools öffnen
- **Ctrl+Plus/Minus** - Zoom anpassen
- **Ctrl+0** - Zoom zurücksetzen

### 📦 Installationsformate
- **DEB** - Für Debian, Ubuntu und Derivate
- **RPM** - Für Fedora, RHEL und Derivate
- **Flatpak** - Sandboxed Installation mit voller Bluetooth-Unterstützung

## 📦 Installation

### DEB-Paket (Debian/Ubuntu)

```bash
# Installation
sudo dpkg -i storz-bickel-app_1.0.0_amd64.deb

# Falls Abhängigkeiten fehlen
sudo apt-get install -f

# App starten
storz-bickel-app
```

### RPM-Paket (Fedora/RHEL)

```bash
# Installation
sudo rpm -i storz-bickel-app-1.0.0.x86_64.rpm

# App starten
storz-bickel-app
```

### Flatpak

```bash
# Installation
flatpak install storz-bickel-app-1.0.0.flatpak

# Bluetooth-Zugriff erlauben
flatpak override --user --device=all org.storzbickel.app

# App starten
flatpak run org.storzbickel.app
```

Für detaillierte Flatpak-Anweisungen siehe [FLATPAK.md](https://github.com/BachenbergS/storz-bickel-app/blob/main/FLATPAK.md).

## 🔧 Systemanforderungen

- **Betriebssystem:** Linux (64-bit)
- **Bluetooth:** Bluetooth-Adapter für Gerätesteuerung
- **Internet:** Aktive Internetverbindung für Web-App-Zugriff
- **Empfohlen:** 
  - 2 GB RAM
  - 200 MB freier Speicherplatz

## 🐛 Bekannte Einschränkungen

- Dies ist eine **inoffizielle** Anwendung
- Alle Funktionen und Inhalte gehören Storz & Bickel
- Support für die Web-App selbst erfolgt durch Storz & Bickel
- Bluetooth-Funktionalität erfordert entsprechende Systemberechtigungen

## 📚 Dokumentation

- [README.md](https://github.com/BachenbergS/storz-bickel-app/blob/main/README.md) - Vollständige Projektübersicht
- [QUICKSTART.md](https://github.com/BachenbergS/storz-bickel-app/blob/main/QUICKSTART.md) - Schnellstart-Anleitung
- [FLATPAK.md](https://github.com/BachenbergS/storz-bickel-app/blob/main/FLATPAK.md) - Flatpak-Installation
- [SECURITY.md](https://github.com/BachenbergS/storz-bickel-app/blob/main/SECURITY.md) - Sicherheitsinformationen
- [CHANGELOG.md](https://github.com/BachenbergS/storz-bickel-app/blob/main/CHANGELOG.md) - Versionshistorie

## 🤝 Feedback & Support

- **Issues:** https://github.com/BachenbergS/storz-bickel-app/issues
- **Verbesserungsvorschläge:** Pull Requests sind willkommen!

## 📄 Lizenz

MIT License - Siehe [LICENSE](https://github.com/BachenbergS/storz-bickel-app/blob/main/LICENSE)

---

**Hinweis:** Diese App ist ein Wrapper um die offizielle Storz & Bickel Web-App und steht in keiner offiziellen Verbindung zu Storz & Bickel.
