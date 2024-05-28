document.addEventListener('DOMContentLoaded', () => {
    const photoDragImages = document.querySelectorAll('.photo-drag img');
    const popContainer = document.querySelector('.pop');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = audioPlayer.querySelector('source');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const seekBar = document.getElementById('seekBar');
    const volumeBtn = document.getElementById('volumeBtn');
    const rewindBtn = document.getElementById('rewindBtn');

    rewindBtn.addEventListener('click', () => {
        audioPlayer.currentTime -= 10; // Rewind by 10 seconds (adjust as needed)
    });

    photoDragImages.forEach(img => {
        img.addEventListener('click', () => {
            const newImage = document.createElement('img');
            newImage.src = img.src;
            newImage.alt = img.alt;
            newImage.draggable = true;

            while (popContainer.firstChild) {
                popContainer.removeChild(popContainer.firstChild);
            }
            popContainer.appendChild(newImage);

            const audioSrc = img.getAttribute('data-audio');
            audioSource.src = audioSrc;
            audioPlayer.load();
            audioPlayer.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        });
    });

    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            audioPlayer.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        seekBar.value = value;
    });

    seekBar.addEventListener('input', () => {
        const time = (seekBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = time;
    });

    volumeBtn.addEventListener('click', () => {
        audioPlayer.muted = !audioPlayer.muted;
        volumeBtn.innerHTML = audioPlayer.muted ? '&#128263;' : '&#128266;';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioPlayer);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    
    const visualizer = document.getElementById('visualizer');
    const bufferLength = 30; // Reduce bufferLength for fewer bars
    const dataArray = new Uint8Array(bufferLength);
    const maxBarHeight = visualizer.offsetHeight; // Use the full height of the visualizer
    let barWidth = visualizer.offsetWidth / bufferLength; // Calculate initial bar width based on visualizer width

    function drawVisualizer() {
        analyser.getByteFrequencyData(dataArray);

        visualizer.innerHTML = ''; // Clear previous bars

        for (let i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i] / 75 * maxBarHeight; // Scale the height based on audio data
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = `${barHeight}px`; // Set the height of the bar
            bar.style.width = `3px`; // Set the width of the bar
            visualizer.appendChild(bar);
        }

        setTimeout(() => {
            requestAnimationFrame(drawVisualizer);
        }, 10); // Update visualizer approximately every 50ms (adjust as needed)
    }

    // Adjust barWidth when the window is resized
    window.addEventListener('resize', () => {
        barWidth = visualizer.offsetWidth / bufferLength;
    });

    audioPlayer.addEventListener('play', () => {
        audioContext.resume().then(() => {
            drawVisualizer();
        });
    });

    audioPlayer.addEventListener('pause', () => {
        cancelAnimationFrame(drawVisualizer);
    });

    audioPlayer.addEventListener('ended', () => {
        cancelAnimationFrame(drawVisualizer);
    });
});



