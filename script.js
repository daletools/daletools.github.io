const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const nav = document.getElementById('nav');
const boids = [];

class Boid {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
    }
}

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight - nav.offsetHeight;

function windowResize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight - nav.offsetHeight;
}

function draw() {
    if (boids.length < 25) {
        boids.push(new Boid());
    }

    boids.forEach(boid => {
        boid.x += boid.vx;
        boid.y += boid.vy;

        if (boid.x > canvas.width) {
            boid.x = 0;
        }
        if (boid.x < 0) {
            boid.x = canvas.width;
        }
        if (boid.y > canvas.height) {
            boid.y = 0;
        }
        if (boid.y < 0) {
            boid.y = canvas.height;
        }
    })

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    boids.forEach(boid => {
        ctx.fillRect(boid.x, boid.y, 10, 10);
    })

    window.requestAnimationFrame(draw);
}

window.addEventListener('resize', windowResize);

draw();


