# 📧 EmailJS Setup Anleitung

Diese Anleitung zeigt dir, wie du EmailJS einrichtest, damit du eine E-Mail erhältst, wenn sie die Rose annimmt oder ablehnt.

## ⚡ Schnellstart (5 Minuten)

### Schritt 1: EmailJS Account erstellen

1. Gehe zu [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klicke auf **"Sign Up Free"**
3. Registriere dich mit deiner E-Mail (oder mit Google)
4. Bestätige deine E-Mail-Adresse

### Schritt 2: E-Mail Service hinzufügen

1. Nach dem Login, klicke auf **"Email Services"** im linken Menü
2. Klicke auf **"Add New Service"**
3. Wähle **Gmail** (oder einen anderen E-Mail-Dienst)
4. Folge den Anweisungen um deinen Gmail-Account zu verbinden
5. Merke dir die **Service ID** (z.B. `service_abc123`)

### Schritt 3: E-Mail Template erstellen

1. Klicke auf **"Email Templates"** im linken Menü
2. Klicke auf **"Create New Template"**
3. Lösche den Beispieltext und füge folgenden Template ein:

**Subject (Betreff):**
```
🌹 Rose {{status}}!
```

**Content (Inhalt):**
```
Hallo Sami,

{{message}}

Status: {{status}}
Zeitpunkt: {{timestamp}}

---
Diese Nachricht wurde automatisch von deiner Valentine's Website gesendet.
```

4. Klicke auf **"Save"**
5. Merke dir die **Template ID** (z.B. `template_xyz789`)

### Schritt 4: Public Key finden

1. Klicke auf **"Account"** im linken Menü
2. Scrolle zu **"API Keys"**
3. Kopiere deinen **Public Key** (z.B. `abcdefgh123456`)

### Schritt 5: Keys in Website einfügen

1. Öffne die Datei `script.js`
2. Finde diese Zeilen am Anfang:

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',  // ضع مفتاحك العام هنا
    serviceID: 'YOUR_SERVICE_ID',  // ضع معرف الخدمة هنا
    templateID: 'YOUR_TEMPLATE_ID' // ضع معرف القالب هنا
};
```

3. Ersetze die Werte:
```javascript
const EMAILJS_CONFIG = {
    publicKey: 'abcdefgh123456',     // Dein Public Key
    serviceID: 'service_abc123',     // Deine Service ID
    templateID: 'template_xyz789'    // Deine Template ID
};
```

4. Speichere die Datei

## ✅ Fertig!

Teste die Website:
1. Öffne `index.html` im Browser
2. Gib den Code `ROSE123` ein
3. Klicke auf "قبول الوردة 💕" (Rose annehmen)
4. Du solltest eine E-Mail an `samikhlil734@gmail.com` erhalten!

## 🔧 E-Mail-Adresse ändern

Die E-Mail wird an die Adresse gesendet, die du in Schritt 2 bei Gmail verbunden hast. Um die Empfänger-Adresse zu ändern:

1. Gehe zu **Email Services** in EmailJS
2. Klicke auf deinen Service
3. Ändere die E-Mail-Adresse
4. Speichern

Alternativ kannst du im Template auch `{{to_email}}` verwenden und die Adresse im Code übergeben.

## 📊 Kostenloser Plan

- **200 E-Mails pro Monat** kostenlos
- Völlig ausreichend für diese Website
- Keine Kreditkarte erforderlich

## ❓ Probleme?

### E-Mail kommt nicht an
1. Prüfe deinen **Spam-Ordner**
2. Überprüfe die **Service ID, Template ID und Public Key** in `script.js`
3. Öffne die **Browser-Konsole** (F12) und schaue nach Fehlern

### "Invalid Public Key" Fehler
- Stelle sicher, dass du den Public Key richtig kopiert hast
- Keine Leerzeichen vor/nach dem Key

### Gmail Verbindung fehlgeschlagen
- Versuche die Verbindung erneut
- Eventuell musst du "Weniger sichere Apps" in Gmail erlauben
- Oder verwende einen anderen E-Mail-Service (Outlook, Yahoo, etc.)

## 🔒 Sicherheit

**WICHTIG:** Dein Public Key ist öffentlich sichtbar im JavaScript-Code. Das ist **völlig normal** bei EmailJS. Der Public Key kann nur E-Mails über dein vorkonfiguriertes Template senden, niemand kann damit Spam versenden.

## 💡 Erweiterte Optionen

Wenn du mehr Informationen in der E-Mail haben möchtest, kannst du das Template erweitern:

```javascript
const templateParams = {
    status: status,
    timestamp: timestamp,
    message: accepted ? 'تم قبول الوردة! 💕🌹' : 'تم رفض الوردة 💔',
    to_name: 'Sami',
    // Weitere Parameter hier hinzufügen
};
```

## 📞 Support

Bei Fragen zur EmailJS-Einrichtung:
- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

Viel Erfolg! 🌹
