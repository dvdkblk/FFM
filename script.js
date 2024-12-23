const card = document.querySelector('.card');
const button = document.getElementById('flip-button');

button.addEventListener('click', () => {
    card.classList.toggle('flipped');
});
