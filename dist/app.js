"use strict";
const canvas = document.getElementById('canvas1');
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext('2d');
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('animate');
    requestAnimationFrame(animate);
}
animate();
window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});
