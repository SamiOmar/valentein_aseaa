# 🌹 Valentine's Day Surprise Website

Eine romantische, einseitige Webseite mit personalisierten Zugangscodes und Nachrichten für den Valentinstag.

## 🎯 Features

- **Code-geschützte Seite**: Nur mit dem richtigen Code wird die Überraschung sichtbar
- **Fallende Blumen Animation**: Wunderschöne Animation mit fallenden Blumen und Herzen
- **Personalisierte Nachrichten**: Jeder Code kann eine individuelle Nachricht anzeigen
- **Responsive Design**: Funktioniert auf Desktop und mobilen Geräten
- **Code Generator**: Einfaches Tool zum Erstellen neuer Codes

## 🚀 Schnellstart

### 1. Lokale Vorschau

Öffne einfach die `index.html` Datei in deinem Browser.

**Test-Codes:**
- `LOVE2024` - "Du bist das Beste, was mir je passiert ist! ❤️"
- `ROSE123` - "Für die wunderbarste Person der Welt! 🌹"
- `HEART456` - "Jeder Tag mit dir ist ein Geschenk! 💕"

### 2. Eigene Codes erstellen

1. Öffne `code-generator.html` im Browser
2. Gib einen Code ein (z.B. "SARAH2024")
3. Gib deine personalisierte Nachricht ein
4. Klicke auf "Code Generieren"
5. Kopiere den generierten Code
6. Öffne `script.js` und füge den Code im `codeMessages` Objekt ein:

```javascript
const codeMessages = {
    'LOVE2024': {
        message: 'Du bist das Beste, was mir je passiert ist! ❤️'
    },
    'DEIN_NEUER_CODE': {
        message: 'Deine neue Nachricht hier!'
    }
};
```

### 3. Auf GitHub Pages veröffentlichen

#### Schritt 1: Repository erstellen
1. Gehe zu [GitHub](https://github.com) und melde dich an
2. Klicke auf "New repository"
3. Gib einen Namen ein (z.B. "valentine-surprise")
4. Wähle "Public"
5. Klicke auf "Create repository"

#### Schritt 2: Code hochladen
```bash
# Im Terminal im Projektordner:
git add .
git commit -m "Add Valentine's Day website"
git branch -M main
git push -u origin main
```

#### Schritt 3: GitHub Pages aktivieren
1. Gehe zu deinem Repository auf GitHub
2. Klicke auf "Settings"
3. Scrolle zu "Pages" (im linken Menü)
4. Unter "Source" wähle "main" branch
5. Klicke auf "Save"
6. Nach 1-2 Minuten ist deine Seite verfügbar unter:
   `https://DEIN_USERNAME.github.io/valentine-surprise/`

## 📁 Projektstruktur

```
webseit/
├── index.html          # Hauptseite mit Code-Eingabe und Animation
├── styles.css          # Alle Styles und Animationen
├── script.js           # Code-Validierung und Logik
├── code-generator.html # Tool zum Erstellen neuer Codes
└── README.md          # Diese Datei
```

## 🎨 Anpassungen

### Farben ändern
Bearbeite die Farbverläufe in `styles.css`:

```css
/* Login-Hintergrund */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Celebration-Hintergrund */
background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);

/* Blütenblätter */
background: linear-gradient(135deg, #ff6b9d 0%, #c06c84 100%);
```

### Hauptnachricht ändern
In `index.html`, Zeile 27:
```html
<h1 class="main-message" id="mainMessage">Happy Valentine's Day</h1>
```

### Mehr/Weniger Blumen
In `script.js`, Zeile 48, ändere die Zahl:
```javascript
for (let i = 0; i < 30; i++) {  // Ändere 30 zu gewünschter Anzahl
```

## 🔒 Sicherheitshinweis

Diese Webseite bietet **keine echte Sicherheit**! Die Codes sind im JavaScript-Code sichtbar. Dies ist nur für:
- Romantische Überraschungen
- Freundschaftliche Geschenke
- Spaß-Projekte

Verwende dies **NICHT** für sensible oder private Informationen!

## 💡 Tipps

1. **Eindeutige Codes**: Verwende schwer zu erratende Codes (z.B. "SUNSET2024" statt "123")
2. **Persönliche Nachrichten**: Mache jede Nachricht einzigartig und persönlich
3. **Emojis verwenden**: Emojis machen die Nachricht emotionaler ❤️🌹💕
4. **Codes teilen**: Schicke den Code per SMS, WhatsApp oder auf einer Karte

## 🛠️ Technologien

- HTML5
- CSS3 (Animations, Flexbox, Gradients)
- Vanilla JavaScript
- GitHub Pages (Hosting)

## 📱 Browser-Kompatibilität

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile Browser ✅

## 📝 Lizenz

Dieses Projekt ist Open Source und kann frei verwendet werden.

## 💖 Viel Spaß!

Überrasche deine Liebsten mit dieser romantischen Webseite! 🌹