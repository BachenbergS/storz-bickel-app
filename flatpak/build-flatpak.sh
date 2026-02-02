#!/bin/bash
set -e

# Lade Runtime-Version aus zentraler Konfiguration
FLATPAK_VERSION=$(cat "$(dirname "$0")/../.flatpak-runtime-version" | tr -d '[:space:]')

echo "=== Storz & Bickel Flatpak Builder ==="
echo "Flatpak Version: $FLATPAK_VERSION"
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
    flatpak install -y flathub org.freedesktop.Platform//$FLATPAK_VERSION org.freedesktop.Sdk//$FLATPAK_VERSION
    flatpak install -y flathub org.electronjs.Electron2.BaseApp//$FLATPAK_VERSION
fi

# Wechsle ins flatpak Verzeichnis
cd "$(dirname "$0")"

# Aktualisiere Manifest mit aktueller Version
echo "Aktualisiere Manifest mit Flatpak Version $FLATPAK_VERSION..."
sed -i.bak "s/runtime-version: '[0-9.]*'/runtime-version: '$FLATPAK_VERSION'/" org.storzbickel.app.yml
sed -i.bak "s/base-version: '[0-9.]*'/base-version: '$FLATPAK_VERSION'/" org.storzbickel.app.yml
rm -f org.storzbickel.app.yml.bak

# Baue das Flatpak
echo "Baue Flatpak..."
flatpak-builder --force-clean --user --install-deps-from=flathub \
    build-dir org.storzbickel.app.yml

echo
echo "=== Build erfolgreich! ==="
echo
echo "Zum Installieren:"
echo "  cd flatpak && flatpak-builder --user --install --force-clean build-dir org.storzbickel.app.yml"
echo
echo "Zum Ausführen:"
echo "  flatpak run org.storzbickel.app"
echo
echo "Zum Exportieren als .flatpak Datei:"
echo "  cd flatpak && flatpak-builder --repo=repo --force-clean build-dir org.storzbickel.app.yml"
echo "  flatpak build-bundle repo storz-bickel-app.flatpak org.storzbickel.app"
