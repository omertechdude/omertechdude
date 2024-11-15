// JavaScript for Matrix Effect

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Function to resize canvas to fit window or container
function resizeCanvas() {
    const homeSection = document.querySelector('.home');
    canvas.width = homeSection.offsetWidth;
    canvas.height = homeSection.offsetHeight;
}

// Initialize canvas size and content
resizeCanvas();

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

// Toggle menu function (for hamburger menu, if applicable)
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    navbar.classList.toggle('show');
    hamburger.classList.toggle('open'); // Toggle open class
}

