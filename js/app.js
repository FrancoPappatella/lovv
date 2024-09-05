const contentBox = document.getElementById('content');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const emoji = document.getElementById('emoji');

const messages = [
    'Me haces muy bien',
    'Alegras todos mis dias',
    'Te amo demasiado, no te vayas nunca de mi vida',
    'Nunca imaginé tener a alguien tan buena como vos a mi lado',
    'Sueño con vivir con vos y alcanzar juntos nuestras metas',
    'Haces mi vida mucho mas facil y feliz 💓',
    'Estoy muy agradecido con la vida por ponerte a mi lado',
    'Sos mi princecita hermosa <3',
    'En serio no te imaginas lo que me encantas, sos todo lo que está bien',
    'Estoy super orgulloso de todo lo que logras, y de todo lo que haces para lograrlo',
    'No puedo esperar a verte mi vida 😭',
    'Pocas veces me sentí TAN pero TAN cómodo con alguien, pero nunca en tan poco tiempo',
    'Tenes que saber que vas a lograr lo que sea, siendo como sos, vales muchísimo Alessia',
    'No me alcanza esta cajita de texto para expresar todo lo que siento por vos',
    'Ya quiero tenerte conmigo todos los días, y basar mi rutina en estar con vos',
    'Quiero formar una familia con vos 😍 (2 hijas, acordate :)  )',
    'Sabé que quiero que seas feliz conmigo y que quiero que me digas todo lo que pueda hacer para que lo seas',
    'Pienso que no puedo estar más enamorado de vos, pero cada día me enamoro más',
    'Me encantas demasiado, nunca imaginé que iba a conocer a una persona tan buena',
    'Me encanta cuando hacemos nuestro ida y vuelta de palabras y frases tiernas',
    'Te necesito en mi vida, junto a mi',
    'Siento demasiada felicidad al ver que estás alcanzando un logro tras otro',
    'Quiero avanzar y hacer lo necesario para ser cada vez más felices juntos',
    'Muero de ganas de conocerte, y llenarte de besitos cuando te vea',
    'ME ENCANTASS MIERDA TE AMO DEMASIADO',
    'Sos increíble Alessia',
    'Disfruto cada segundo que estoy con vos',
    'No puedo estar más a gusto con vos',
    'Para hacerme feliz basta con verte feliz a vos',
    'Pará, pará, pará, ¿vos me estás cargando?',
    'Sos mi reina amorcito'
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
        const texto = daysRemaining <= 0 ? `¡¡¡MI AMOR, LLEGO EL DÍA!!! 💓😍😭❤️` : `Bebe! solo faltan ${daysRemaining} días para que nos veamos 😍`;
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
