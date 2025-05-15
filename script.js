import { Boid } from './Boid.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const nav = document.getElementById('nav');
const title = document.getElementById('title').getBoundingClientRect();
const boids = [];
let mouse = { x: 0, y: 0 };


function windowResize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight - nav.offsetHeight;
}

function draw() {

    if (boids.length < 250) {
        boids.push(new Boid(boids.length, canvas.width, canvas.height));
    }

    boids.forEach(boid => {
        boid.flock(boids, title, mouse);
        boid.position.x += boid.vel.x;
        boid.position.y += boid.vel.y;

        if (boid.position.x > canvas.width) {
            boid.position.x = 0;
        }
        if (boid.position.x < 0) {
            boid.position.x = canvas.width;
        }
        if (boid.position.y > canvas.height) {
            boid.position.y = 0;
        }
        if (boid.position.y < 0) {
            boid.position.y = canvas.height;
        }
    })

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    boids.forEach(boid => {
        ctx.save();

        ctx.beginPath();
        ctx.translate(boid.position.x, boid.position.y);
        ctx.rotate(Math.atan2(boid.vel.y, boid.vel.x) + Math.PI / 2);
        ctx.moveTo(-3, 7);
        ctx.lineTo(0, 0);
        ctx.lineTo(3, 7);
        ctx.arcTo(3, 7, -3, 7, 2);
        ctx.fillStyle = 'lightgreen';
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    })
    window.requestAnimationFrame(draw);
}

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight - nav.offsetHeight;

window.addEventListener('resize', windowResize);

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
});


draw();