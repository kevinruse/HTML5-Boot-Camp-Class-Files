<!--// JavaScript Document
$(document).ready(function() {
  var seekbar = document.getElementById('seekbar');
  var video = document.getElementById('demo');
  var playPause = document.getElementById('play-pause_btn');

  init();	
  $('#play-pause_btn').click(function(){
	if(video.paused) {
      video.play();
        playPause.value = "Pause";
    }
    else if(video.play) {
      video.pause();
        playPause.value = "Play";
    }
    else if(video.ended) {
      video.currentTime = 0;
      video.play();
      playPause.value = "Pause";
    }

  });
  $('#pause_btn').click(function(){
	$('#demo').get(0).pause();
  });
  
  $('#volumeControl').change(function() {
  	video.volume = this.value;
  });

function init() {
	video.addEventListener('timeupdate', updateSeekbar, false);
	video.addEventListener('durationchange', initSeekbar, false);
	seekbar.addEventListener('change', changeVidTime, false);
	initSeekbar();
}
function initSeekbar() {
	seekbar.min = 0;
	seekbar.max = video.duration;
}
function updateSeekbar() {
	seekbar.value = video.currentTime;
    video.addEventListener('timeupdate', updateSeekbar, false);
}
function changeVidTime() {
    video.currentTime = seekbar.value;
}
});

