document.querySelector('.heart').addEventListener('click', function() {
    document.querySelector('.envelope-wrapper').classList.toggle('flap');
});

//Video-slider
// function videoUrl(greetings){
//     document.getElementById("slider").src = greetings;
// }



document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('video');

    const playVideo = (video) => {
        video.play();
    };

    const pauseVideo = (video) => {
        video.pause();
        video.currentTime = 0;
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (entry.isIntersecting) {
                playVideo(video);
            } else {
                pauseVideo(video);
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust this value based on when you want the video to start playing
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    document.querySelectorAll('.swiper-slide').forEach(slide => {
        observer.observe(slide);
    });
});
