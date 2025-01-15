document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('backgroundVideo');
    const audio = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');

    const videoSources = [
        'https://link.storjshare.io/s/jw4jdrw4evyyaazsae4fzod443aa/music/1.mp4',
        'https://link.storjshare.io/s/jvn5yfvsto4jxrkm53yxo7ifsdvq/music/2.mp4',
        'https://link.storjshare.io/s/jvkzwlv6fg5v6pdp2yavlk7gffnq/music/3.mp4',
        'https://link.storjshare.io/s/jvz323tw27wnghzlgcs36kxpqvra/music/3.mp4',
        'https://link.storjshare.io/s/jus75ykhgbpqn432ix3x6hmy73ea/music/4.mp4',
        'https://link.storjshare.io/s/jxgnmtegbnckj2uqs7ppqar2yyha/music/4.mp4',
        'https://link.storjshare.io/s/jxr6ht5vep6senkn5echav2cf3ia/music/5.mp4',
        'https://link.storjshare.io/s/jw7opm4ueb25le47zhmsplsruc5a/music/6.mp4',
        'https://link.storjshare.io/s/ju2stcqrsuqfecuejjvjd63o5r3q/music/7.mp4',
        'https://link.storjshare.io/s/jxkdqefin6ubdppoapxjni34p6ja/music/8.mp4',
        'https://link.storjshare.io/s/jxxc6fnrprfbqwbnw5kmihdwm6iq/music/9.mp4'
    ];

    let currentVideoIndex = 0;

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            video.play();
        } else {
            audio.pause();
            video.pause();
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
        audio.volume = e.target.value;
        video.volume = e.target.value;
    });

    // Auto-advance to next video when current video ends
    video.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        video.src = videoSources[currentVideoIndex];
        video.play();
    });
});