// const audio = new Audio();
// audio.src = 'music.mp3';
// audio.autoplay = true;

var source = "music.mp3"
var audio = document.createElement("audio");
//
audio.autoplay = true;
//
audio.load()
audio.addEventListener("load", function () {
    audio.play();
    console.log(123)
}, true);
audio.src = source;

// setTimeout(() => {
//     a.autoplay = true
//     console.log('start')
//
//
// }, 500)
