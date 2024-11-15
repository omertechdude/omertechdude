const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Function to resize canvas to fit the window
function resizeCanvas() {
    canvas.width = window.innerWidth;  // Set canvas width to window's width
    canvas.height = window.innerHeight; // Set canvas height to window's height
}

// Initialize canvas size and content
resizeCanvas();

// Resize the canvas when the window is resized
window.addEventListener('resize', resizeCanvas);

const letters = 'OMER_IT|WEBDEVELOPMENT|OMERTECHDUDE';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

// Create a linear gradient for the falling text (cyberpunk colors)
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, '#D3D3D3');  // Light gray
gradient.addColorStop(0.2, '#B0B0B0'); // Lighter gray
gradient.addColorStop(0.4, '#A0C4FF'); // Light blue
gradient.addColorStop(0.6, '#B83A2B'); // Dark orange-red
gradient.addColorStop(0.8, '#4F2C1D'); // Deep rust
gradient.addColorStop(1, 'black'); // Final black

function draw() {
    // Fade background to create that 'Matrix' effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the gradient as the fill style for the falling text
    ctx.fillStyle = gradient;
    ctx.font = `${fontSize}px monospace`;

    // Draw the falling text
    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        // Reset the drop when it reaches the bottom, with a bit of randomness
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}

// Update the drawing every 30 milliseconds
setInterval(draw, 30);

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    navbar.classList.toggle('show');
    hamburger.classList.toggle('open'); // Toggle open class
}

// Adjust canvas size on window resize (if applicable)
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    const canvas = document.querySelector('canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw your canvas content if necessary
    }
}

window.addEventListener('load', resizeCanvas); // Ensure the canvas is sized on load

