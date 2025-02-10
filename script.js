const messages = [
    "Es-tu sûre?",
    "Vraiment sûre??",
    "Ça va comme tu veux?",
    "Pookie please...",
    "Reflechis encore un peu !",
    "Si tu dis non, je serai triste...",
    "Je serai vraiment vraiment triste...",
    "très très très très très trise...",
    "Eh, azy j'abandonne...",
    "NON, dis oui! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "thankyou.html";
}