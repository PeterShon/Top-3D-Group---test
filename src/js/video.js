/* video */
export function video() {
  class Video {
    constructor(video) {
      this.videoContainer = video
      this.videoWrapper = video.querySelector('video')
      this.videoSource = video.querySelector('source')
      this.videoFace = video.querySelector('.video__face')
      this.videoPanel = video.querySelector('.video__panel')
      this.videoPlayPause = video.querySelector('.video__playpause')
      this.videoStop = video.querySelector('.video__stop')
      this.videoProgress = video.querySelector('.video__progress')
      this.videoVolume = video.querySelector('.video__volume')
    }
    filler() {
      this.activatorCustom()
    }
    activatorCustom() {
      this.videoFace.addEventListener('click', () => {
        if (this.videoContainer.classList.contains('video_play')) {
        } else {
          this.toPlay()
        }
      })
      this.videoPlayPause.addEventListener('click', () => {
        if (this.videoContainer.classList.contains('video_play')) {
          this.toPause()
        } else {
          this.toPlay()
        }
      })
      this.videoWrapper.addEventListener('click', () => {
        if (this.videoContainer.classList.contains('video_play')) {
          this.toPause()
        } else {
          this.toPlay()
        }
      })
      this.videoStop.addEventListener('click', () => {
        this.toStop()
      })
      this.videoVolume.addEventListener('click', () => {
        if (this.videoVolume.classList.contains('video__volume_no-sound')) {
          this.upVolume()
        } else {
          this.downVolume()
        }
      })
      this.videoWrapper.addEventListener('ended', () => {
        this.toStop()
      })
      this.videoProgress.addEventListener('click', (e) => {
        let xPos = e.offsetX
        this.stepToTime(xPos)
      })
      this.videoProgress.addEventListener('mousemove', (e) => {
        let xPos = e.offsetX
        this.showTarget(xPos)
      })
      this.videoWrapper.addEventListener('mouseover', (e) => {
        this.videoProgress.querySelector('.video__target-line').style.width = `0px`
      })
    }

    activatorYT() {
      this.videoFace.addEventListener('click', () => {
        if (this.videoContainer.classList.contains('video_play')) {
        } else {
          this.toPlay()
        }
      })
      this.videoWrapper.addEventListener('click', () => {
        if (this.videoContainer.classList.contains('video_play')) {
          this.toPause()
        } else {
          this.toPlay()
        }
      })
      this.videoWrapper.addEventListener('ended', () => {
        this.toStop()
      })
    }

    toPlay() {
      this.videoContainer.classList.add('video_play')
      this.videoContainer.classList.remove('video_pause')
      this.videoContainer.classList.remove('video_stop')
      this.videoWrapper.play()
      this.getProgressPercent(1)
    }
    toPause() {
      this.videoWrapper.pause()
      this.videoContainer.classList.remove('video_play')
      this.videoContainer.classList.add('video_pause')
      this.videoContainer.classList.remove('video_stop')
      this.getProgressPercent(0)
    }
    toStop() {
      this.videoContainer.classList.remove('video_play')
      this.videoContainer.classList.remove('video_pause')
      this.videoContainer.classList.add('video_stop')
      this.videoWrapper.pause()
      this.videoWrapper.currentTime = 0
      this.getProgressPercent(0)
    }
    upVolume() {
      this.videoVolume.classList.remove('video__volume_no-sound')
      this.videoWrapper.volume = 1
    }
    downVolume() {
      this.videoVolume.classList.add('video__volume_no-sound')
      this.videoWrapper.volume = 0
    }
    getProgressPercent(toggle) {
      if (toggle) {
        this.progress = setInterval(() => {
          let progress = Math.round((this.videoWrapper.currentTime / this.videoWrapper.duration) * 100) / 100
          this.showProgress(progress)
        }, 300)

      } else {
        clearInterval(this.progress)
      }
    }
    showProgress(num) {
      let width = this.videoProgress.offsetWidth
      this.videoProgress.querySelector('.video__progress-line').style.width = `${width * num}px`
    }
    stepToTime(xPos) {
      let width = this.videoProgress.offsetWidth
      let percentPos = xPos / width
      this.videoWrapper.currentTime = this.videoWrapper.duration * percentPos
      this.toPlay()
    }
    showTarget(xPos) {
      this.videoProgress.querySelector('.video__target-line').style.width = `${xPos}px`
    }
  }

  let videos = document.querySelectorAll('.video')
  if (videos) {
    window.video = []
    videos.forEach((videoItem, index) => {
      window.video[index] = new Video(videoItem)
      window.video[index].filler()
    });
  }
}