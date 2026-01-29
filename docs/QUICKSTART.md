# 🚀 Schnellstart

## Installation

```bash
git clone git@github.com:BachenbergS/storz-bickel-app.git
cd storz-bickel-app
npm install
npm start
```

## Build erstellen

```bash
npm run build  # Erstellt AppImage, DEB und RPM im dist/ Verzeichnis
```

## Bluetooth-Zugriff aktivieren

**Wichtig:** Die App benötigt Bluetooth für die Gerätesteuerung!

```bash
# Bluetooth aktivieren
bluetoothctl power on

# Bei Flatpak: Bluetooth-Zugriff erlauben
flatpak override --user --device=all org.storzbickel.app
```

## Häufige Probleme

### Node.js fehlt
```bash
# Ubuntu/Debian
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

### App startet nicht
```bash
unset ELECTRON_RUN_AS_NODE
npm start
```

## Support

Issues: https://github.com/BachenbergS/storz-bickel-app/issues
