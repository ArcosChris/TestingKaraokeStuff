const audioTest = new Audio('testAudio.mp3');
const buttonTest = document.getElementById('testButton');
let mainDiv = document.querySelector('.mainDiv');
let isPlaying = false;
let color = ['red', 'blue', 'yellow', 'green', 'pink', 'purple'];




//'timeupdate' event

buttonTest.addEventListener("click", (event) => {
    /* the audio is now playable; play it if permissions allow */

    if (!isPlaying) {
        isPlaying = true;
        audioTest.play();
        buttonTest.innerHTML = 'Pause'
    }
    else {
        buttonTest.innerHTML = 'Start'
        audioTest.pause();
        isPlaying = false;
    }
});

audioTest.addEventListener('timeupdate', e => {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    mainDiv.style.background = randomColor;
})