# Flatpak Build-Anleitung

Diese Anleitung beschreibt, wie Sie die Storz & Bickel Desktop App als Flatpak bauen und installieren.

## Voraussetzungen

```bash
# Flatpak und flatpak-builder installieren
# Fedora
sudo dnf install flatpak flatpak-builder

# Ubuntu/Debian
sudo apt install flatpak flatpak-builder

# Arch Linux
sudo pacman -S flatpak flatpak-builder

# Flathub Repository hinzufügen
flatpak remote-add --if-not-exists --user flathub https://flathub.org/repo/flathub.flatpakrepo

# Electron BaseApp, Runtime und Node.js SDK Extension installieren
flatpak install -y --user flathub org.freedesktop.Platform//23.08
flatpak install -y --user flathub org.freedesktop.Sdk//23.08
flatpak install -y --user flathub org.freedesktop.Sdk.Extension.node20//23.08
flatpak install -y --user flathub org.electronjs.Electron2.BaseApp//23.08
```

## Flatpak bauen

### Automatisch mit Build-Skript (empfohlen)

```bash
./build-flatpak.sh
```

Das Skript prüft automatisch alle Voraussetzungen und baut das Flatpak.

### Manuell

```bash
# Dependencies generieren (nur bei Änderungen an package-lock.json nötig)
npm run generate:flatpak-sources

# Flatpak bauen
flatpak-builder --force-clean --user --install-deps-from=flathub \
    build-dir org.storzbickel.app.yml

# Installieren
flatpak-builder --user --install --force-clean build-dir org.storzbickel.app.yml

# Ausführen
flatpak run org.storzbickel.app
```

## Flatpak-Bundle erstellen

Um eine `.flatpak` Datei zu erstellen, die Sie weitergeben können:

```bash
# Repository erstellen
flatpak-builder --repo=repo --force-clean build-dir org.storzbickel.app.yml

# Bundle erstellen
flatpak build-bundle repo storz-bickel-app.flatpak org.storzbickel.app

# Bundle installieren (auf anderem System)
flatpak install --user storz-bickel-app.flatpak

# Bundle ausführen
flatpak run org.storzbickel.app
```

## Flatpak deinstallieren

```bash
flatpak uninstall --user org.storzbickel.app

# Optional: App-Daten löschen
rm -rf ~/.var/app/org.storzbickel.app
```

## Technische Details

### Verwendete Komponenten

- **Runtime**: org.freedesktop.Platform 23.08
- **SDK**: org.freedesktop.Sdk 23.08
- **Base App**: org.electronjs.Electron2.BaseApp 23.08
- **Node.js**: org.freedesktop.Sdk.Extension.node20 (für Build)
- **Electron**: 40.1.0 (in node_modules)

### Berechtigungen

Das Flatpak benötigt folgende Berechtigungen:

- `--share=ipc` - X11 Shared Memory
- `--socket=x11` - X11 Display
- `--socket=wayland` - Wayland Display
- `--socket=pulseaudio` - Audio
- `--share=network` - Netzwerkzugriff für Web-App
- `--allow=bluetooth` - Bluetooth-Zugriff
- `--device=all` - Gerätezugriff (für Bluetooth)
- `--system-talk-name=org.bluez` - BlueZ D-Bus Zugriff
- `--device=dri` - GPU-Beschleunigung

### Offline-Build

Das Flatpak verwendet `generated-sources.json` mit 1232 npm-Paketquellen für einen vollständig offline-fähigen Build. Dies wird automatisch generiert mit:

```bash
npm run generate:flatpak-sources
```

## Troubleshooting

### Bluetooth funktioniert nicht

Stellen Sie sicher, dass die Flatpak-App Bluetooth-Zugriff hat:

```bash
# Geräte-Zugriff erlauben
flatpak override --user --device=all org.storzbickel.app

# System-D-Bus-Zugriff prüfen
flatpak override --user --show org.storzbickel.app | grep system-talk
```

Prüfen Sie auch, ob Bluetooth auf Ihrem System aktiviert ist:

```bash
bluetoothctl power on
bluetoothctl list
```

### App startet nicht

Prüfen Sie die Logs:

```bash
# Verbose-Modus
flatpak run org.storzbickel.app --verbose

# Systemd-Journal
journalctl --user -f | grep storz-bickel

# Flatpak-Logs
flatpak run --log-session-bus org.storzbickel.app
```

Häufige Probleme:
- **Sandbox-Fehler**: Die App verwendet `--no-sandbox`, da Flatpak bereits Sandboxing bietet
- **D-Bus-Fehler**: Warnung über fehlenden System-Bus ist normal, wenn Bluetooth nicht verwendet wird
- **Node nicht gefunden**: Sollte nicht auftreten, da die Electron-Binary direkt aufgerufen wird

### Build schlägt fehl

```bash
# Cache löschen und neu bauen
rm -rf .flatpak-builder build-dir
./build-flatpak.sh

# Node.js SDK Extension prüfen
flatpak list | grep node20

# Falls nicht installiert:
flatpak install --user flathub org.freedesktop.Sdk.Extension.node20//23.08
```

### Neuinstallation erzwingen

```bash
# Komplett deinstallieren
flatpak uninstall --user org.storzbickel.app
rm -rf ~/.var/app/org.storzbickel.app
rm -rf .flatpak-builder build-dir

# Neu bauen und installieren
./build-flatpak.sh
flatpak-builder --user --install --force-clean build-dir org.storzbickel.app.yml
```

## Entwicklung

### Dependencies aktualisieren

Nach Änderungen an `package.json` oder `package-lock.json`:

```bash
npm install
npm run generate:flatpak-sources
```

### Manifest anpassen

Die Flatpak-Konfiguration befindet sich in [`org.storzbickel.app.yml`](org.storzbickel.app.yml). Wichtige Abschnitte:

- `finish-args`: Berechtigungen
- `build-commands`: Build-Prozess
- `sources`: Quellen (inkl. generated-sources.json)

### Test-Build ohne Installation

```bash
flatpak-builder --force-clean build-dir org.storzbickel.app.yml
flatpak-builder --run build-dir org.storzbickel.app.yml storz-bickel-app
```

## Weitere Informationen

- [Flatpak Dokumentation](https://docs.flatpak.org/)
- [Electron BaseApp](https://github.com/flathub/org.electronjs.Electron2.BaseApp)
- [Flatpak Builder Tools](https://github.com/flatpak/flatpak-builder-tools)
- [Zurück zur Hauptdokumentation](README.md)
