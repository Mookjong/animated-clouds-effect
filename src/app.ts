const canvas = document.getElementById('canvas1') as HTMLCanvasElement
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D



function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    console.log('animate')

    requestAnimationFrame(animate)
}

animate()


window.addEventListener('resize', ()=>{
    canvas.width = innerWidth
    canvas.height = innerHeight
})