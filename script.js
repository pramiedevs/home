document.addEventListener("scroll", () => {
    const images = document.querySelectorAll(".image[data-rotate]");
    const scrollY = window.scrollY;

    images.forEach((image) => {
        const rotateDirection = image.getAttribute("data-rotate") === "left" ? -1 : 1;
        const rect = image.getBoundingClientRect();
        const offset = (scrollY - rect.top + window.innerHeight / 2) * 0.040;

        image.style.transform = `rotateY(${offset * rotateDirection}deg)`;
        image.style.boxShadow = `${Math.abs(offset) / 4}px ${Math.abs(offset) / 4}px 20px rgba(0,0,0,0.3)`;
    });
});
// Select the button, body, and icon
const toggleButton = document.getElementById('dark-mode-toggle');
const iconSpan = document.getElementById('icon');
const body = document.body;

// Initial State (light mode by default)
let isDarkMode = false; // Light mode is active
body.classList.add('light-mode'); // Default to light mode
toggleButton.classList.add('light'); // Default button state
iconSpan.textContent = '🌙'; // Moon icon for dark mode toggle

// Event Listener for Mode Toggle
toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode; // Toggle state

    if (isDarkMode) {
        // Activate dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.classList.remove('light');
        toggleButton.classList.add('dark');
        iconSpan.textContent = '☀️'; // Sun icon for light mode toggle
    } else {
        // Activate light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.classList.remove('dark');
        toggleButton.classList.add('light');
        iconSpan.textContent = '🌙'; // Moon icon for dark mode toggle
    }
});

// Select elements
const loadingText = document.getElementById('loading-text');
const dots = document.getElementById('dots');
const logoText = document.getElementById('logo-text');

// Animate the dots
let dotCount = 0;
const maxDots = 3;

const dotInterval = setInterval(() => {
    dotCount = (dotCount + 1) % (maxDots + 1); // Cycle between 0, 1, 2, 3 dots
    dots.textContent = '.'.repeat(dotCount); // Update the dots
}, 500); // Change every 500ms

// Transition to logo after 2 seconds
setTimeout(() => {
    clearInterval(dotInterval); // Stop the dot animation
    loadingText.style.display = 'none'; // Hide "Loading..."
    logoText.classList.remove('hidden'); // Show "Pramie" with fade-in
}, 2000);
