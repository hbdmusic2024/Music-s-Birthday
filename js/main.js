document.querySelector('.heart').addEventListener('click', function() {
    document.querySelector('.envelope-wrapper').classList.toggle('flap');
});

//Video-slider
// function videoUrl(greetings){
//     document.getElementById("slider").src = greetings;
// }

// Audio Player


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


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle video play
  function handleVideoPlay() {
    var videoElement = document.querySelector('.video1 video');
    if (isElementInViewport(videoElement)) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  // Event listener for scroll event
  window.addEventListener('scroll', function() {
    handleVideoPlay();
  });

  // Initial check when the page loads
  handleVideoPlay();
  
