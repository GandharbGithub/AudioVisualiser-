const play = document.getElementById('play');
const pause = document.getElementById('pause');

let audio1 = new Audio();
audio1.src = 'DatPhoria - Scream It Loud (320K).mp3';

play.addEventListener('click', () => {
    audio1.play();
})

pause.addEventListener('click', () => {
    audio1.pause();
})
