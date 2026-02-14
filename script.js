// الرموز والرسائل المخصصة
const codeMessages = {
    'ROSE123': {
        message: 'رغم المسافة الكبيرة بيننا، وعدم قدرتي على إعطائك وردة حقيقية... أردت أن أهديكِ هذه الوردة الرقمية 🌹\n\nالمسافات لا تُضعف المشاعر الصادقة، بل تجعلها أقوى وأعمق 💕'
    }
};

function checkCode() {
    const input = document.getElementById('codeInput');
    const errorMsg = document.getElementById('errorMsg');
    const code = input.value.trim().toUpperCase();

    if (codeMessages[code]) {
        // Code ist korrekt
        errorMsg.textContent = '';
        showCelebration(codeMessages[code].message);
    } else {
        // رمز خاطئ
        errorMsg.textContent = 'الرمز غير صحيح، حاولي مرة أخرى';
        input.value = '';
        input.classList.add('shake');
        setTimeout(() => {
            input.classList.remove('shake');
        }, 500);
    }
}

function showCelebration(personalMessage) {
    const loginContainer = document.getElementById('loginContainer');
    const celebration = document.getElementById('celebration');
    const personalMessageEl = document.getElementById('personalMessage');

    // Nachricht setzen
    personalMessageEl.textContent = personalMessage;

    // Login ausblenden, Celebration anzeigen
    loginContainer.style.display = 'none';
    celebration.classList.add('active');

    // Fallende Blumen erstellen
    createFallingFlowers();
}

function createFallingFlowers() {
    const container = document.getElementById('fallingFlowers');
    const flowerEmojis = ['🌹', '🌺', '🌸', '🌷', '💐', '💕', '❤️', '💖', '✨'];

    // 40 وردة متساقطة
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'falling-flower';
            flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

            // Zufällige horizontale Position
            flower.style.left = Math.random() * 100 + '%';

            // Zufällige Animationsdauer (8-15 Sekunden)
            const duration = 8 + Math.random() * 7;
            flower.style.animationDuration = duration + 's';

            // Zufällige Verzögerung
            flower.style.animationDelay = Math.random() * 2 + 's';

            // Zufällige Größe
            const size = 20 + Math.random() * 20;
            flower.style.fontSize = size + 'px';

            container.appendChild(flower);

            // إزالة الوردة بعد الانتهاء وإنشاء واحدة جديدة
            setTimeout(() => {
                flower.remove();
                if (container.children.length < 40) {
                    createFallingFlowers();
                }
            }, (duration + 2) * 1000);
        }, i * 200);
    }
}

// Enter-Taste zum Absenden
document.getElementById('codeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkCode();
    }
});

// Shake-Animation für falschen Code
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
    .shake {
        animation: shake 0.5s;
    }
`;
document.head.appendChild(style);
