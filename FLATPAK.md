# Flatpak Build-Anleitung

## Voraussetzungen

```bash
# Flatpak und flatpak-builder installieren (Fedora)
sudo dnf install flatpak flatpak-builder

# Flathub Repository hinzufügen
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Electron BaseApp und Runtime installieren
flatpak install -y flathub org.freedesktop.Platform//23.08 org.freedesktop.Sdk//23.08
flatpak install -y flathub org.electronjs.Electron2.BaseApp//23.08
```

## Flatpak bauen

### Automatisch mit Build-Skript

```bash
./build-flatpak.sh
```

### Manuell

```bash
# Dependencies generieren (nur bei Änderungen an package-lock.json)
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
flatpak install storz-bickel-app.flatpak
```

## Flatpak deinstallieren

```bash
flatpak uninstall org.storzbickel.app
```

## Troubleshooting

### Bluetooth funktioniert nicht

Stellen Sie sicher, dass die Flatpak-App Bluetooth-Zugriff hat:

```bash
flatpak override --user --device=all org.storzbickel.app
```

### App startet nicht

Prüfen Sie die Logs:

```bash
flatpak run org.storzbickel.app --verbose
journalctl --user -f | grep storz-bickel
```

### Neuinstallation erzwingen

```bash
flatpak uninstall --user org.storzbickel.app
rm -rf ~/.var/app/org.storzbickel.app
flatpak-builder --user --install --force-clean build-dir org.storzbickel.app.yml
```
