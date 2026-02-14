// ======== إعدادات EmailJS ========
// قم بتغيير هذه القيم بعد إنشاء حساب EmailJS (انظر README.md)
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',  // ضع مفتاحك العام هنا
    serviceID: 'YOUR_SERVICE_ID',  // ضع معرف الخدمة هنا
    templateID: 'YOUR_TEMPLATE_ID' // ضع معرف القالب هنا
};

// الرموز والرسائل المخصصة
const codeMessages = {
    'ROSE123': {
        message: 'رغم المسافة الكبيرة بيننا، وعدم قدرتي على إعطائك وردة حقيقية... أردت أن أهديكِ هذه الوردة الرقمية 🌹\n\nالمسافات لا تُضعف المشاعر الصادقة، بل تجعلها أقوى وأعمق 💕'
    }
};

// تهيئة EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();

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

// قبول الوردة
function acceptRose() {
    const actionButtons = document.getElementById('actionButtons');
    actionButtons.style.display = 'none';

    // إرسال إشعار بالبريد الإلكتروني
    sendEmailNotification(true);

    // عرض الشاشة النهائية
    showFinalScreen(true);
}

// رفض الوردة
function rejectRose() {
    const actionButtons = document.getElementById('actionButtons');
    actionButtons.style.display = 'none';

    // إرسال إشعار بالبريد الإلكتروني
    sendEmailNotification(false);

    // عرض الشاشة النهائية
    showFinalScreen(false);
}

// إرسال إشعار عبر البريد الإلكتروني
function sendEmailNotification(accepted) {
    const status = accepted ? 'قبلت' : 'رفضت';
    const timestamp = new Date().toLocaleString('ar-EG', {
        timeZone: 'Asia/Baghdad',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const templateParams = {
        status: status,
        timestamp: timestamp,
        message: accepted ? 'تم قبول الوردة! 💕🌹' : 'تم رفض الوردة 💔'
    };

    // إرسال البريد الإلكتروني
    emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams
    ).then(
        function(response) {
            console.log('تم إرسال الإشعار بنجاح', response.status, response.text);
        },
        function(error) {
            console.log('فشل إرسال الإشعار', error);
        }
    );
}

// عرض الشاشة النهائية
function showFinalScreen(accepted) {
    const celebration = document.getElementById('celebration');
    const finalScreen = document.getElementById('finalScreen');
    const finalEmoji = document.getElementById('finalEmoji');
    const finalTitle = document.getElementById('finalTitle');
    const finalText = document.getElementById('finalText');

    if (accepted) {
        finalEmoji.textContent = '💕';
        finalTitle.textContent = 'شكراً لك! 🌹';
        finalText.textContent = 'تم قبول الوردة بنجاح\nسعيد جداً بقرارك 💕';
        createFinalFlowers();
    } else {
        finalEmoji.textContent = '💔';
        finalTitle.textContent = 'حسناً...';
        finalText.textContent = 'تم رفض الوردة\nأتمنى لك كل السعادة';
        document.getElementById('finalScreen').style.background = 'linear-gradient(135deg, #d4d4d4 0%, #a8a8a8 100%)';
    }

    setTimeout(() => {
        celebration.style.display = 'none';
        finalScreen.classList.add('active');
    }, 500);
}

// إنشاء ورود متساقطة للشاشة النهائية
function createFinalFlowers() {
    const container = document.getElementById('finalFlowers');
    const flowerEmojis = ['🌹', '💕', '❤️', '💖', '✨', '🌺'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'falling-flower';
            flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

            flower.style.left = Math.random() * 100 + '%';
            const duration = 8 + Math.random() * 7;
            flower.style.animationDuration = duration + 's';
            flower.style.animationDelay = Math.random() * 2 + 's';
            const size = 20 + Math.random() * 20;
            flower.style.fontSize = size + 'px';

            container.appendChild(flower);

            setTimeout(() => {
                flower.remove();
                if (container.children.length < 35) {
                    createFinalFlowers();
                }
            }, (duration + 2) * 1000);
        }, i * 150);
    }
}

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
