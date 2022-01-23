const seekbar = document.getElementById('seekbar');
const video = document.getElementById('demo');
const playBtn = document.getElementById('play_btn');
const pauseBtn = document.getElementById('pause_btn');
const volumeControl = document.getElementById('volumeControl');
video.addEventListener('timeupdate', updateSeekbar, false);
video.addEventListener('durationchange', initSeekbar, false);
playBtn.addEventListener('click', playVideo);
pauseBtn.addEventListener('click', pauseVideo);
volumeControl.addEventListener('change', controlVolume);
seekbar.addEventListener('change', fastForward, false);
initSeekbar();

function initSeekbar() {
    seekbar.min = 0;
    seekbar.max = video.duration;
}

function playVideo() {
    video.play()
}

function pauseVideo() {
    video.pause();
}

function controlVolume(evt) {
    video.volume = evt.target.value;
}

function updateSeekbar() {
    seekbar.value = video.currentTime;
    video.addEventListener('timeupdate', updateSeekbar, false);
}

function fastForward(evt) {
    video.removeEventListener('timeupdate', updateSeekbar);
    video.currentTime = seekbar.value;
    video.addEventListener('timeupdate', updateSeekbar);
}


