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

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        renderProjects(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback content or error message
        document.getElementById('projects-container').innerHTML = `
      <p class="error">Unable to load projects. Please check back later.</p>
    `;
    }
});

function renderProjects(projects) {
    const container = document.getElementById('projects-container');

    container.innerHTML = projects.map(project => `
    <div class="project-card" data-tags="${project.tags.join(' ')}">
      <div class="card-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="card-links">
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="github-link">GitHub</a>` : ''}
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="live-link">Live Demo</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

window.addEventListener('resize', windowResize);

document.getElementById('mouse-tracker').addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left + window.scrollX;
    mouse.y = event.clientY - rect.top + window.scrollY;
});

function adjustMainHeight() {
    const nav = document.getElementById('nav');
    const main = document.getElementById('main');
    const navHeight = nav.offsetHeight;

    main.style.minHeight = `calc(100vh - ${navHeight}px)`;
}

window.addEventListener('load', adjustMainHeight);

// Optional: Run on resize in case nav height changes responsively
window.addEventListener('resize', adjustMainHeight);


draw();