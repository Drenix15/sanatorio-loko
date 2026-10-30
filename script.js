/* ==========================================
   SANATORIO LOKO
   Sistema interactivo de cumpleaños
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // 1. ELEMENTOS PRINCIPALES
    // ======================================

    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainContent = document.getElementById("mainContent");

    const enterButton = document.getElementById("enterButton");
    const openFileButton = document.getElementById("openFileButton");

    const giftButton = document.getElementById("giftButton");
    const giftMessage = document.getElementById("giftMessage");

    const photoUpload = document.getElementById("photoUpload");
    const galleryGrid = document.getElementById("galleryGrid");

    // ======================================
    // 2. INGRESO AL SANATORIO
    // ======================================

    enterButton.addEventListener("click", () => {

        welcomeScreen.classList.add("leaving");

        setTimeout(() => {

            welcomeScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            showNotification(
                "¡Paciente ingresado al pabellón! 🏥"
            );

        }, 700);

    });


    // ======================================
    // 3. ABRIR EXPEDIENTE CLÍNICO
    // ======================================

    openFileButton.addEventListener("click", () => {

        const medicalFile = document.getElementById("medicalFile");

        medicalFile.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        medicalFile.classList.add("file-highlight");

        setTimeout(() => {
            medicalFile.classList.remove("file-highlight");
        }, 1800);

    });


    // ======================================
    // 4. PERSONALIDADES DE JUAN ANTONIO
    // ======================================

    const personalities = {

        normal: {
            name: "🙂 Juan Antonio",
            description:
                "La versión aparentemente normal del paciente. Saluda, conversa y parece una persona funcional. El personal confirma que esta personalidad existe, aunque no aparece todos los días.",
            meme:
                "Yo soy tranquilo. — Juan Antonio, cinco minutos antes del incidente.",
            color: "#b9ff6a"
        },

        loco: {
            name: "🤡 El Loco",
            description:
                "Presenta ideas que ningún especialista consigue explicar. Puede estar tranquilo y, de repente, puede decir incoherencias que cuestiona la vida misma. El personal recomienda no preguntarle qué está pensando.",
            meme:
                "De un arbol sale un lapiz, cuiden el medio ambiente",
            color: "#ff69b4"
        },

        bestia: {
            name: "🦍 La Bestia",
            description:
                "Cuando se activa esta personalidad, el paciente entra en modo jefe final. Energía descontrolada, se recomienda huir inmediatamente de la zona",
            meme:
                "Vas a caer Renzo maldito >:v",
            color: "#ff5555"
        },

        celoso: {
            name: "👀 Estudiante Eterno",
            description:
                "Personalidad que de la nada se cuestiona de su existencia y se pregunta si puede estudiar una carrera mas. El personal le exorta terminar y ser una persona exitosa",
            meme:
                "Amor, ¿Y si estudio economía?",
            color: "#ffe66d"
        },

        jhon: {
            name: "🇬🇧 Jhon Antony",
            description:
                "Una transformación internacional. De pronto, Juan Antonio empieza a hablar inglés con una confianza impresionante. Su pronunciación puede ser cuestionable. Dato: le enseño su ex",
            meme:
                "Hello everybody! Today I am very happy. — Jhon Antony.",
            color: "#8b7cff"
        }

    };


    const personalityButtons =
        document.querySelectorAll(".personality-card");

    const personalityName =
        document.getElementById("personalityName");

    const personalityDescription =
        document.getElementById("personalityDescription");

    const personalityMeme =
        document.getElementById("personalityMeme");

    const personalityDetail =
        document.getElementById("personalityDetail");


    personalityButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedPersonality =
                button.dataset.personality;

            const data = personalities[selectedPersonality];

            if (!data) return;

            // Desactivar las demás tarjetas
            personalityButtons.forEach(card => {
                card.classList.remove("active");
            });

            // Activar la seleccionada
            button.classList.add("active");

            // Actualizar información
            personalityName.textContent = data.name;

            personalityDescription.textContent =
                data.description;

            personalityMeme.textContent = data.meme;

            // Cambiar el color de acento
            personalityDetail.style.borderColor = data.color;

            // Reiniciar animación
            personalityDetail.classList.remove("personality-change");

            void personalityDetail.offsetWidth;

            personalityDetail.classList.add("personality-change");

            showNotification(
                "Personalidad detectada: " + data.name
            );

        });

    });


    // ======================================
    // 6. REGALO DE CUMPLEAÑOS
    // ======================================

    giftButton.addEventListener("click", () => {

        if (!giftMessage.classList.contains("hidden")) return;

        giftMessage.classList.remove("hidden");

        giftButton.textContent =
            "¡REGALO DESBLOQUEADO! 🎉";

        giftButton.disabled = true;

        launchConfetti();

        showNotification(
            "¡El paciente ha recibido su regalo! 🎂"
        );

    });


    // ======================================
    // 7. SÍMBOLOS FLOTANTES
    // ======================================

    const floatingSymbols =
        document.getElementById("floatingSymbols");

    const symbols = [
        "🏥", "💊", "🤡", "🧠",
        "🚨", "💀", "🎂", "🩺",
        "🤣", "👀"
    ];

    if (floatingSymbols) {

        for (let i = 0; i < 18; i++) {

            const symbol = document.createElement("span");

            symbol.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            symbol.style.left = Math.random() * 100 + "%";

            symbol.style.animationDuration =
                (8 + Math.random() * 12) + "s";

            symbol.style.animationDelay =
                (Math.random() * 10) + "s";

            floatingSymbols.appendChild(symbol);

        }

    }


    // ======================================
    // 8. NOTIFICACIONES
    // ======================================

    function showNotification(message) {

        const notification =
            document.createElement("div");

        notification.className = "notification";

        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add("notification-show");
        }, 10);

        setTimeout(() => {

            notification.classList.remove("notification-show");

            setTimeout(() => {
                notification.remove();
            }, 400);

        }, 2800);

    }


    // ======================================
    // 9. CONFETI DE CUMPLEAÑOS
    // ======================================

    function launchConfetti() {

        const colors = [
            "#b9ff6a",
            "#8b7cff",
            "#ff5555",
            "#ffe66d",
            "#ff69b4",
            "#ffffff"
        ];

        for (let i = 0; i < 100; i++) {

            const confetti =
                document.createElement("div");

            confetti.className = "confetti";

            confetti.style.left = Math.random() * 100 + "vw";

            confetti.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];

            confetti.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            confetti.style.animationDelay =
                Math.random() * 0.8 + "s";

            confetti.style.transform =
                `rotate(${Math.random() * 360}deg)`;

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 6000);

        }

    }


    // ======================================
    // 10. MENSAJE DE CONSOLA
    // ======================================

    console.log(
        "%c🏥 SANATORIO LOKO",
        "color:#b9ff6a;font-size:25px;font-weight:bold;"
    );

    console.log(
        "%cPaciente: Juan Antonio",
        "color:#8b7cff;font-size:16px;"
    );

    console.log(
        "%cEstado: demasiado feliz por su cumpleaños 😂",
        "color:#ff69b4;font-size:14px;"
    );

});