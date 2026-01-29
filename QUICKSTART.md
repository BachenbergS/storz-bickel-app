# 🚀 Schnellstart

## In 3 Schritten zur Storz & Bickel Desktop App

### 1️⃣ Repository klonen und Abhängigkeiten installieren

```bash
git clone git@github.com:BachenbergS/storz-bickel-app.git
cd storz-bickel-app
npm install
```

Dies installiert Electron und alle benötigten Pakete. Der Vorgang dauert ca. 1-2 Minuten.

### 2️⃣ App starten

```bash
npm start
```

Die App öffnet sich automatisch und lädt die Storz & Bickel Web-App.

### 3️⃣ (Optional) Installationspaket erstellen

```bash
npm run build
```

Erstellt installierbare Pakete im `dist/` Verzeichnis:
- **AppImage** - Portable, funktioniert auf allen Linux-Distributionen
- **DEB** - Für Debian/Ubuntu
- **RPM** - Für Fedora/RHEL/CentOS

Für Flatpak siehe [FLATPAK.md](FLATPAK.md).

## Erste Schritte nach dem Start

1. **Internetverbindung prüfen** - Die App benötigt Internet, um die Web-App zu laden
2. **Anmelden** - Melden Sie sich mit Ihren Storz & Bickel Zugangsdaten an
3. **Bluetooth aktivieren** - Stellen Sie sicher, dass Bluetooth aktiviert ist
4. **Vollbild** - Drücken Sie `F11` für Vollbildmodus
5. **Entwicklertools** - Drücken Sie `Ctrl+Shift+I` bei Problemen

## Häufige Probleme

### "npm: command not found"
Node.js ist nicht installiert. Installieren Sie es mit:
```bash
# Ubuntu/Debian
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm

# Arch Linux
sudo pacman -S nodejs npm
```

### App startet nicht
```bash
# Prüfen Sie, ob ELECTRON_RUN_AS_NODE gesetzt ist
echo $ELECTRON_RUN_AS_NODE

# Falls ja, entfernen Sie es
unset ELECTRON_RUN_AS_NODE

# Oder verwenden Sie das npm-Skript (macht das automatisch)
npm start
```

### App lädt nicht
- Prüfen Sie Ihre Internetverbindung
- Versuchen Sie `npm start` erneut
- Öffnen Sie die Entwicklertools (`Ctrl+Shift+I`) für Details
- Prüfen Sie, ob https://app.storz-bickel.com/ im Browser erreichbar ist

### Bluetooth funktioniert nicht
- Stellen Sie sicher, dass Bluetooth aktiviert ist: `bluetoothctl power on`
- Prüfen Sie, ob Ihr Adapter erkannt wird: `bluetoothctl list`
- Bei Flatpak: `flatpak override --user --device=all org.storzbickel.app`

### Build schlägt fehl
Installieren Sie Build-Tools:
```bash
# Ubuntu/Debian
sudo apt-get install build-essential

# Fedora
sudo dnf groupinstall "Development Tools"

# Arch Linux
sudo pacman -S base-devel
```

## Nächste Schritte

- Lesen Sie die vollständige [README.md](README.md) für Details
- Passen Sie die App in [`main.js`](main.js) an
- Erstellen Sie ein Flatpak mit [FLATPAK.md](FLATPAK.md)
- Lesen Sie über Sicherheit in [SECURITY.md](SECURITY.md)

## Support

Bei Problemen:
1. Prüfen Sie die [README.md](README.md) und diese Anleitung
2. Öffnen Sie ein Issue im Repository: https://github.com/BachenbergS/storz-bickel-app
3. Für Web-App-Probleme kontaktieren Sie Storz & Bickel direkt
