// script.js

function showSecondPage() {
    document.getElementById('secondPage').classList.remove('hidden-page');
}

function moveNoButton() {
    const noButton = document.getElementById('no-button');
    noButton.style.position = 'absolute';
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

function showFinalPage() {
    document.getElementById('finalPage').classList.remove('hidden-page');
}
