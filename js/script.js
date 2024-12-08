function playVideo() {
    const video = document.querySelector('.video-element');
    const overlay = document.querySelector('.play-overlay');
    const preview = document.querySelector('.video-preview');

    overlay.style.display = 'none';
    preview.style.display = 'none';
    video.style.display = 'block';
    video.play();
}