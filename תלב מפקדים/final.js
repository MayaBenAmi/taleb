let title;
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fit the viewport
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];

// Function to create a single firework explosion at a given position
function createFirework(x, y) {
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 10 + 2;
        const velocityX = Math.cos(angle) * speed;
        const velocityY = Math.sin(angle) * speed;
        particles.push({
            x: x,
            y: y,
            velocityX: velocityX,
            velocityY: velocityY,
            lifetime: Math.random() * 20 + 10,
            size: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 75%)`
        });
    }
}

// Update particles positions and remove expired ones
function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.velocityX;
        p.y += p.velocityY;
        p.lifetime -= 0.1;
        if (p.lifetime <= 0) {
            particles.splice(i, 1);
        }
    }
}

// Draw particles on canvas
function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    }
}

// Main animation loop
function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
}

// Function to start fireworks
function startFireworks(x, y) {
    createFirework(x, y);
}


window.addEventListener('load', () => {
    title = document.getElementById('main-title');
    loadTitle();
    document.getElementById('repeat').addEventListener('click', ()=> {
        window.location.href = 'open.html';
    });
    // Start fireworks at the center of the screen
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    if (sessionStorage.getItem('grade') > 70) {
        startFireworks(x, y);
        document.getElementById('sub-title').innerText = 'לחץ על המסך';
    }
    
});

loadTitle = () => {
    if (sessionStorage.getItem('grade') > 70) {
        title.innerText = `כל הכבוד! הציון שלך הוא ${sessionStorage.getItem('grade')}, אין עליך בעולם!`;
    } else {
        title.innerText = `הציון שלך הוא ${sessionStorage.getItem('grade')}.\n אל תתבאס, בפעם הבאה תצליח יותר...`;
    }
    
}

// Add event listeners for touch and click to trigger fireworks, based on grade
function handleInteraction(event) {
    if (sessionStorage.getItem('grade')> 70) { // Check if the grade is over 70
        const rect = canvas.getBoundingClientRect();
        const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
        const y = (event.touches ? event.touches[0].clientY : event.clientY) - rect.top;
        startFireworks(x, y);
    }
}

// Bind the touchstart and click events to the handleInteraction function
canvas.addEventListener('touchstart', handleInteraction);
canvas.addEventListener('click', handleInteraction);

// Start the animation loop
animate();