document.addEventListener('DOMContentLoaded', () => {
    const photoDragImages = document.querySelectorAll('.photo-drag img');
    const popContainer = document.querySelector('.pop');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = audioPlayer.querySelector('source');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const volumeBtn = document.getElementById('volumeBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const songNames = document.getElementById('currentSongName'); // Updated to match span id

    // Audio Context and Analyser setup for visualizer
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioPlayer);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    // Visualizer setup
    const visualizer = document.getElementById('visualizer');
    const bufferLength = 30; // Adjust bufferLength as needed for number of bars
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
            bar.style.width = `${barWidth}px`; // Set the width of the bar
            visualizer.appendChild(bar);
        }

        requestAnimationFrame(drawVisualizer);
    }

    // Adjust barWidth when the window is resized
    window.addEventListener('resize', () => {
        barWidth = visualizer.offsetWidth / bufferLength;
    });

    // Event listeners for player controls
    rewindBtn.addEventListener('click', () => {
        audioPlayer.currentTime -= 10; // Rewind by 10 seconds (adjust as needed)
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
        // seekBar.value = value; // Uncomment if seekbar functionality is needed
    });

    // Uncomment if seekbar functionality is needed
    // seekBar.addEventListener('input', () => {
    //     const time = (seekBar.value / 100) * audioPlayer.duration;
    //     audioPlayer.currentTime = time;
    // });

    volumeBtn.addEventListener('click', () => {
        audioPlayer.muted = !audioPlayer.muted;
        volumeBtn.innerHTML = audioPlayer.muted ? '&#128263;' : '&#128266;';
    });

    // Event listener for clicking on images to change audio and display song name
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
            const songName = img.getAttribute('data-song-name');
            audioSource.src = audioSrc;
            audioPlayer.load();
            audioPlayer.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';

            // Update song name display
            songNames.textContent = songName;

            // Start visualizer
            audioContext.resume().then(() => {
                drawVisualizer();
            });
        });
    });

    // Pause visualizer when audio is paused or ended
    audioPlayer.addEventListener('pause', () => {
        cancelAnimationFrame(drawVisualizer);
    });

    audioPlayer.addEventListener('ended', () => {
        cancelAnimationFrame(drawVisualizer);
    });
});
