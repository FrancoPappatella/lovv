const contentBox = document.getElementById('content');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const emoji = document.getElementById('emoji');

const messages = [
    'Me haces muy bien',
    'Alegras todos mis dias',
    'Te amo demasiado, no te vayas nunca de mi vida',
    'Nunca imaginé tener a alguien tan buena como vos a mi lado',
    'Pará, pará, pará, ¿vos me estás cargando?',
];

let index = 0;

contentBox.addEventListener('click', () => {
    index = (index + 1) % messages.length;
    contentBox.innerHTML = messages[index];
});

// Celulares
contentBox.addEventListener('touchstart', () => {
    index = (index + 1) % messages.length;
    contentBox.innerHTML = messages[index];
});


document.addEventListener('DOMContentLoaded', function () {

    const targetDate = new Date('2024-11-02');
    
 
    function updateCountdown() {
        const today = new Date();
        const timeDifference = targetDate - today;
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        
        // Mostrar el número de días y el emoji
        const countdownElement = document.getElementById('days-remaining');
        const texto = daysRemaining <= 0 ? `¡¡¡MI AMOR, LLEGO EL DÍA!!! 💓😍😭❤️` : `Bebe! solo faltan ${daysRemaining} días para que nos veamos ❤️😍`;
        countdownElement.innerHTML = texto ;
    }
    
    // Actualizar el contador al cargar la página
    updateCountdown();
    
    // Se actualiza cada noche :D
    setInterval(updateCountdown, 24 * 60 * 60 * 1000);

    // Mini juego
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const emoji = document.getElementById('emoji');
    const yesText = document.getElementById('yes-text');

    function moveNoButton() {
        emoji.innerHTML = '😎';
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }


    noButton.addEventListener('mousedown', moveNoButton);
    noButton.addEventListener('touchstart', moveNoButton); 

    yesButton.addEventListener('click', function () {
        emoji.innerHTML = '😍';
        yesText.innerHTML = "TE AMO MI VIDA <3";
    });
});
