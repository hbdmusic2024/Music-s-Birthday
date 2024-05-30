document.querySelector('.heart').addEventListener('click', function() {
    document.querySelector('.envelope-wrapper').classList.toggle('flap');
});



// document.addEventListener("DOMContentLoaded", function() {
//     const image = document.getElementById('imageToMove');

//     image.addEventListener('click', function() {
//         image.classList.toggle('moved');
//     });
// });




// (function() {
//     "use strict";    
//     console.log("fired");

//     let paper1 = document.querySelector(".paper-1");

//     if (paper1) {
//         function paperAnimation() {
//             paper1.classList.toggle("animation");
//         }

//         paper1.addEventListener("click", paperAnimation, false);    
//     } else {
//         console.error("Element with class 'paper-1' not found.");
//     }
// })();




//Video-slider
// function videoUrl(greetings){
//     document.getElementById("slider").src = greetings;
// }document.addEventListener("DOMContentLoaded", function() {
    // document.addEventListener("DOMContentLoaded", function() {
    //     const playVideo = (video) => {
    //         if (video.paused) {
    //             video.play();
    //             console.log(`Playing video: ${video.src}`);
    //         }
    //     };
    
    //     const pauseVideo = (video) => {
    //         if (!video.paused) {
    //             video.pause();
    //             video.currentTime = 0;
    //             console.log(`Pausing video: ${video.src}`);
    //         }
    //     };
    
    //     const handleIntersection = (entries, observer) => {
    //         entries.forEach(entry => {
    //             const video = entry.target.querySelector('video');
    //             if (video) {
    //                 if (entry.isIntersecting) {
    //                     playVideo(video);
    //                 } else {
    //                     pauseVideo(video);
    //                 }
    //             }
    //         });
    //     };
    
    //     const observerOptions = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5 // Adjust this value based on when you want the video to start playing
    //     };
    
    //     const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    //     document.querySelectorAll('.swiper-slide').forEach(slide => {
    //         const video = slide.querySelector('video');
    //         if (video) {
    //             video.pause(); // Ensure all videos are paused initially
    //         }
    //         observer.observe(slide);
    //     });
    // });
    
