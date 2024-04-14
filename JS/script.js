let timer; // Variable pour stocker l'ID de l'intervalle du chronomètre
let hours = 0; // Heures
let minutes = 0; // Minutes
let seconds = 0; // Secondes
let milliseconds = 0; // Millisecondes
let isRunning = false; // Indique si le chronomètre est en cours d'exécution ou non
// Récupérer les éléments de texte pour les heures, les minutes, les secondes et les millisecondes
let hoursDisplay = document.getElementById("hours");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let millisecondsDisplay = document.getElementById("ms");
// Initialiser les variables sp, h, mins, s et ms

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 10); // Démarre le chronomètre en appelant updateTimer() toutes les 10 millisecondes
        isRunning = true;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer); // Arrête le chronomètre en effaçant l'intervalle
        isRunning = false;
    }
}

function updateTimer() {
    milliseconds++; // Incrémente les millisecondes
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++; // Incrémente les secondes lorsque les millisecondes atteignent 100
        if (seconds === 60) {
            seconds = 0;
            minutes++; // Incrémente les minutes lorsque les secondes atteignent 60
            if (minutes === 60) {
                minutes = 0;
                hours++; // Incrémente les heures lorsque les minutes atteignent 60
            }
        }
    }
    // Mettre à jour l'affichage des heures, minutes, secondes et millisecondes
    hoursDisplay.textContent = pad(hours) + " h";
    minutesDisplay.textContent = pad(minutes) + " mins";
    secondsDisplay.textContent = pad(seconds) + " seconds";
    millisecondsDisplay.textContent = pad(milliseconds) + " ms";
}

function pad(value) {
    return value < 10 ? '0' + value : value; // Ajoute un 0 devant les chiffres < 10 pour maintenir le format HH:MM:SS:MM
}

function resetTimer() {
    clearInterval(timer); // Arrête le chronomètre
    hours = 0; // Réinitialise les heures
    minutes = 0; // Réinitialise les minutes
    seconds = 0; // Réinitialise les secondes
    milliseconds = 0; // Réinitialise les millisecondes
    isRunning = false; // Indique que le chronomètre est arrêté
    
    // Réinitialiser l'affichage des heures, minutes, secondes et millisecondes
    hoursDisplay.textContent = "00 h";
    minutesDisplay.textContent = "00 mins";
    secondsDisplay.textContent = "00 seconds";
    millisecondsDisplay.textContent = "00 ms";
}

// Ajoute des écouteurs d'événements pour les boutons de démarrage/arrêt et de réinitialisation
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
