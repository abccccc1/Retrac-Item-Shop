const videoScreen = document.getElementById("video-screen");
const mainContent = document.getElementById("mainContent");
const video = document.getElementById("introVideo");
const skipBtn = document.getElementById("skipBtn");
const tooltip = document.getElementById("tooltip");
function endVideo() {
  video.pause();
  video.currentTime = 0;
  video.src = "";
  video.remove();
  videoScreen.style.opacity = "0";
  setTimeout(() => {
    videoScreen.style.display = "none";
    mainContent.classList.add("visible");
  }, 450);
}
skipBtn.addEventListener("click", endVideo);
video.addEventListener("ended", endVideo);
