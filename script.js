document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('backgroundVideo');
    const audio = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');

    const videoSources = ['assets/milch.mp4'];
    let currentVideoIndex = 0;

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            video.play();
            playPauseBtn.classList.add('active');
        } else {
            audio.pause();
            video.pause();
            playPauseBtn.classList.remove('active');
        }
    });

    resetBtn.addEventListener('click', () => {
        audio.currentTime = 0;
        video.currentTime = 0;
        audio.play();
        video.play();
    });

    nextBtn.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        video.src = videoSources[currentVideoIndex];
        video.play();
    });

    prevBtn.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
        video.src = videoSources[currentVideoIndex];
        video.play();
    });

    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value;
        audio.volume = volume;
        video.volume = volume;
    });

    video.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        video.src = videoSources[currentVideoIndex];
        video.play();
    });
});