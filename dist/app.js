import Particle from './classes/Particle.js';
const canvas = document.getElementById('canvas1');
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext('2d');
let particles = [];
export const mouse = {
    x: 0,
    y: 0,
    radius: 60
};
function init() {
    particles = [];
    for (let i = 0; i < 1000; ++i) {
        particles.push(new Particle(canvas));
    }
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update(mouse);
        particle.draw(ctx);
    });
    requestAnimationFrame(animate);
}
init();
animate();
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});
window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});
setInterval(() => {
    mouse.x = undefined;
    mouse.y = undefined;
}, 1000);
