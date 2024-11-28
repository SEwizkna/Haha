// Prevent right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent developer tools shortcuts
document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && (e.key === 'Shift' || e.key === 'I' || e.key === 'C'))
    ) {
        e.preventDefault();
    }
});

// Handle overlay and audio
const overlay = document.getElementById('overlay');
const backgroundMusic = document.getElementById('backgroundMusic');

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    backgroundMusic.play().catch(error => {
        console.error('Audio playback failed:', error);
    });
});