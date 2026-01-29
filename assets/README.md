# Assets-Verzeichnis

## Icon

Platzieren Sie hier ein App-Icon mit dem Namen `icon.png`.

### Empfohlene Spezifikationen:
- **Format**: PNG
- **Größe**: 512x512 Pixel (oder größer)
- **Transparenz**: Optional, aber empfohlen

### Icon erstellen

Sie können ein Icon auf verschiedene Arten erstellen:

1. **Eigenes Design**: Erstellen Sie ein eigenes Icon mit einem Grafikprogramm (GIMP, Inkscape, etc.)

2. **Storz & Bickel Logo**: Laden Sie das offizielle Logo von der Storz & Bickel Website herunter (falls verfügbar)

3. **Generisches Icon**: Verwenden Sie ein generisches Icon als Platzhalter

### Beispiel: Einfaches Icon mit ImageMagick erstellen

```bash
# Einfaches farbiges Quadrat als Platzhalter
convert -size 512x512 xc:#2c3e50 -gravity center -pointsize 72 -fill white -annotate +0+0 "S&B" icon.png
```

### Icon-Dateien

Die App sucht nach folgender Datei:
- `icon.png` - Haupt-Icon für die Anwendung

Ohne Icon wird die App trotzdem funktionieren, aber mit einem Standard-Electron-Icon angezeigt.
