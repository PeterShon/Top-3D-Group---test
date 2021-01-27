let videos = document.querySelectorAll('.video-yt__field')

function setID() {
  if (videos) {
    let counter = 0
    videos.forEach(video => {
      video.id = 'js_video-' + counter
      counter++
    })
    counter = 0
  }
}

function setFunc() {
  let videoWrappers = document.querySelectorAll('.video-yt')
  if (videoWrappers) {
    videoWrappers.forEach((wrap, index) => {
      wrap.addEventListener('click', function () {
        playVideo(player[index])
      })
    });
  }
}

setID()
setFunc()

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player = [];
if (videos) {
  for (let i = 0; i < videos.length; i++) {
    player[i] = null
  }
}

function onYouTubeIframeAPIReady() {
  if (videos) {
    for (let i = 0; i < videos.length; i++) {
      curentID = 'js_video-' + i
      player[i] = new YT.Player(curentID, {
        height: 'auto',
        width: '100%',
        videoId: document.getElementById(curentID).dataset.video,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
  }
}

function onPlayerReady(event) {
}

var done = false;
function onPlayerStateChange(event) {
  let wrap = event.target.h.parentNode
  if (event.data == 2 || event.data == 0) {
    wrap.classList.remove('video-yt_play');
  } else if (event.data == 1) {
    wrap.classList.add('video-yt_play');
  }
}
function stopVideo(player) {
  player.stopVideo();
}
function playVideo(player) {
  player.playVideo();
}