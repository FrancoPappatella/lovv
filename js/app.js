const contentBox = document.getElementById('content');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const emoji = document.getElementById('emoji');
// Array de mensajes o imágenes
const messages = [
    'Eres lo mejor que me ha pasado',
    'Cada día contigo es especial',
    'Te amo más que a nada',
    'Gracias por hacerme tan feliz',
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
        countdownElement.innerHTML = `Faltan ${daysRemaining} días para que nos veamos ❤️`;
    }
    
    // Actualizar el contador al cargar la página
    updateCountdown();
    
    // Se actualiza cada noche :D
    setInterval(updateCountdown, 24 * 60 * 60 * 1000);

    // Mini juego
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const emoji = document.getElementById('emoji');

    function moveNoButton() {
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
    });
});
