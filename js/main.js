document.querySelector('.heart').addEventListener('click', function() {
    document.querySelector('.envelope-wrapper').classList.toggle('flap');
});

//Video-slider
function videoUrl(greetings){
    document.getElementById("slider").src = greetings;
}

// Audio Player

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".photo-drag img");
    images.forEach(image => {
        image.addEventListener("touchstart", touchStart, false);
        image.addEventListener("touchmove", touchMove, false);
        image.addEventListener("touchend", touchEnd, false);
    });

    let touch = null;

    function touchStart(e) {
        touch = e.target;
        touch.style.position = "absolute";
        touch.style.zIndex = 1000;
        document.body.append(touch);
        moveAt(e.touches[0].pageX, e.touches[0].pageY);
    }

    function moveAt(pageX, pageY) {
        touch.style.left = pageX - touch.offsetWidth / 2 + 'px';
        touch.style.top = pageY - touch.offsetHeight / 2 + 'px';
    }

    function touchMove(e) {
        moveAt(e.touches[0].pageX, e.touches[0].pageY);
    }

    function touchEnd() {
        touch = null;
    }
});



// document.addEventListener('DOMContentLoaded', function() {
//     const navigationItems = document.querySelectorAll('.navigation li');
    
//     navigationItems.forEach(item => {
//         const videoUrl = item.getAttribute('data-video');
//         const video = document.createElement('video');
//         video.src = videoUrl;
//         video.muted = true;
//         video.playsInline = true;
//         video.preload = 'metadata';

//         video.addEventListener('loadeddata', () => {
//             video.currentTime = 0;
//         });

//         video.addEventListener('seeked', () => {
//             const canvas = document.createElement('canvas');
//             canvas.width = video.videoWidth;
//             canvas.height = video.videoHeight;
//             const context = canvas.getContext('2d');
//             context.drawImage(video, 0, 0, canvas.width, canvas.height);
//             const imgUrl = canvas.toDataURL();
//             const img = document.createElement('img');
//             img.src = imgUrl;
//             img.style.width = '100%';  // Ensure the image scales correctly
//             item.appendChild(img);
//             video.remove();
//         });

//         video.addEventListener('error', () => {
//             console.error(`Error loading video: ${videoUrl}`);
//         });

//         document.body.appendChild(video);
//     });
// });

// function videoUrl(url) {
//     const videoElement = document.getElementById('slider');
//     const sourceElement = document.getElementById('video-source');
//     sourceElement.src = url;
//     videoElement.load();
// }
