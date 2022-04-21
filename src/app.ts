import Particle from './classes/Particle.js'

const canvas = document.getElementById('canvas1') as HTMLCanvasElement
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let particles: Particle[] = []
export const mouse: {
    x: number | undefined,
    y: number | undefined,
    radius: number
} = {
    x: 0,
    y: 0,
    radius: 60
}

function init(){
    particles = []
    for(let i=0; i<1000; ++i){
        particles.push(new Particle(canvas, ))
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
   

    particles.forEach(particle =>{
        particle.update(mouse)
        particle.draw(ctx)
    })
   
    requestAnimationFrame(animate)
}

init()
animate()

window.addEventListener('mousemove', (e: MouseEvent)=>{
    mouse.x = e.x
    mouse.y = e.y
})

window.addEventListener('resize', ()=>{
    canvas.width = innerWidth
    canvas.height = innerHeight
    init()
})

setInterval(()=>{
    mouse.x = undefined
    mouse.y = undefined
}, 1000)