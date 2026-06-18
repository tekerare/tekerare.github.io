// audio player

let currentAudioIndex = 0;
const audioElement = document.getElementById('audio');
function changeAudio(audioURL) {
  audioElement.src = audioURL;
  audioElement.load();
  audioElement.play();
}
document.querySelectorAll('h3 a').forEach(function(h3, index) {
  h3.addEventListener('click', function() {
    currentAudioIndex = index;
    const audioURL = audioFiles[currentAudioIndex];
    changeAudio(audioURL);
  });
});

audioElement.addEventListener('ended', function() {
  currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
  const nextAudioURL = audioFiles[currentAudioIndex];
  changeAudio(nextAudioURL);
});

// video player

let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});