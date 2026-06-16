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