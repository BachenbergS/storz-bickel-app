# 🚀 Schnellstart

## In 3 Schritten zur Storz & Bickel Desktop App

### 1️⃣ Abhängigkeiten installieren

```bash
cd ~/Code/storz-bickel-app
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

## Erste Schritte nach dem Start

1. **Internetverbindung prüfen** - Die App benötigt Internet, um die Web-App zu laden
2. **Anmelden** - Melden Sie sich mit Ihren Storz & Bickel Zugangsdaten an
3. **Vollbild** - Drücken Sie `F11` für Vollbildmodus
4. **Entwicklertools** - Drücken Sie `Ctrl+Shift+I` bei Problemen

## Häufige Probleme

### "npm: command not found"
Node.js ist nicht installiert. Installieren Sie es mit:
```bash
# Ubuntu/Debian
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

### App lädt nicht
- Prüfen Sie Ihre Internetverbindung
- Versuchen Sie `npm start` erneut
- Öffnen Sie die Entwicklertools (`Ctrl+Shift+I`) für Details

### Build schlägt fehl
Installieren Sie Build-Tools:
```bash
# Ubuntu/Debian
sudo apt-get install build-essential

# Fedora
sudo dnf groupinstall "Development Tools"
```

## Nächste Schritte

- Lesen Sie die vollständige [README.md](README.md) für Details
- Passen Sie die App in [main.js](main.js) an
- Fügen Sie ein eigenes Icon in `assets/icon.png` hinzu

## Support

Bei Problemen:
1. Prüfen Sie die [README.md](README.md)
2. Öffnen Sie ein Issue im Repository
3. Für Web-App-Probleme kontaktieren Sie Storz & Bickel direkt
