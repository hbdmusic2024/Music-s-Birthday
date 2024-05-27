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
        const hammer = new Hammer(image);
        hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

        hammer.on("panstart", function(e) {
            image.classList.add("dragging");
            image.style.position = "absolute";
            image.style.zIndex = 1000;
            document.body.append(image);
            moveAt(e.center.x, e.center.y);
        });

        hammer.on("panmove", function(e) {
            moveAt(e.center.x, e.center.y);
        });

        hammer.on("panend", function() {
            image.classList.remove("dragging");
            image.style.zIndex = "";
        });

        function moveAt(pageX, pageY) {
            image.style.left = pageX - image.offsetWidth / 2 + 'px';
            image.style.top = pageY - image.offsetHeight / 2 + 'px';
        }
    });
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
