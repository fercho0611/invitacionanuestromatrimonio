const weddingDate = new Date('April 11, 2026 13:30:00').getTime();

setInterval(() => {
const now = new Date().getTime();
const distance = weddingDate - now;

if (distance <= 0) return;

document.getElementById('days').textContent =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById('hours').textContent =
Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

document.getElementById('minutes').textContent =
Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById('seconds').textContent =
Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);


const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('musicBtn');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = '⏸ Pausar';
    isPlaying = true;
  } else {
    music.pause();
    musicBtn.textContent = '▶ Continuar canción';
    isPlaying = false;
  }

});

