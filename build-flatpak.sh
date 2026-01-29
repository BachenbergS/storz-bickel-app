#!/bin/bash
set -e

echo "=== Storz & Bickel Flatpak Builder ==="
echo

# Prüfe ob flatpak-builder installiert ist
if ! command -v flatpak-builder &> /dev/null; then
    echo "Error: flatpak-builder ist nicht installiert"
    echo "Installieren Sie es mit: sudo dnf install flatpak-builder"
    exit 1
fi

# Prüfe ob Electron BaseApp installiert ist
if ! flatpak list | grep -q "org.electronjs.Electron2.BaseApp"; then
    echo "Installiere Electron BaseApp..."
    flatpak install -y flathub org.freedesktop.Platform//23.08 org.freedesktop.Sdk//23.08
    flatpak install -y flathub org.electronjs.Electron2.BaseApp//23.08
fi

# Baue das Flatpak
echo "Baue Flatpak..."
flatpak-builder --force-clean --user --install-deps-from=flathub \
    build-dir org.storzbickel.app.yml

echo
echo "=== Build erfolgreich! ==="
echo
echo "Zum Installieren:"
echo "  flatpak-builder --user --install --force-clean build-dir org.storzbickel.app.yml"
echo
echo "Zum Ausführen:"
echo "  flatpak run org.storzbickel.app"
echo
echo "Zum Exportieren als .flatpak Datei:"
echo "  flatpak-builder --repo=repo --force-clean build-dir org.storzbickel.app.yml"
echo "  flatpak build-bundle repo storz-bickel-app.flatpak org.storzbickel.app"
