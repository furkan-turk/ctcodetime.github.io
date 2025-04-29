function playVideo(videoFile) {
    const video = document.getElementById("courseVideo");
    video.src = videoFile;
    video.load();
    video.play();
}
