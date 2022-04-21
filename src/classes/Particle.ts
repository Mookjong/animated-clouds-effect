import {mouse} from '../app.js'

export default class Particle{
    canvas: HTMLCanvasElement;
    coloursArr = ['#fff', 'rgba(255, 255, 255, .3)', 'rgba(173, 216; 230, .8', 'rgba(211, 211, 211, .8)']
    maxSize = 60
    minSize = 0
    x: any;
    y: any;
    directionX: any;
    directionY: any;
    size: number;
    colours: string;

    constructor(canvas: HTMLCanvasElement){
        this.canvas = canvas
        this.directionX = Math.random() * .2 - .1
        this.directionY = Math.random() * .2 - .1
        this.size = this.minSize
        this.x = Math.random() * (canvas.width - this.size * 2) + this.size
        this.y = Math.random() * (canvas.height - this.size * 2) + this.size
        this.colours = this.coloursArr[Math.floor(Math.random() * this.coloursArr.length)]
    }

    update(appMouse: typeof mouse){
        if(this.x + this.size > this.canvas.width || this.x - this.size < 0) this.directionX *= -1
        if(this.y + this.size > this.canvas.height || this.y - this.size < 0) this.directionY *= -1

        this.x += this.directionX
        this.y += this.directionY

        if(mouse.x && mouse.y){
            if(Math.abs(mouse.x - this.x) < mouse.radius && Math.abs(mouse.y - this.y) < mouse.radius){
                if(this.size < this.maxSize){
                    this.size += 6
                }
            }
            else{
                if(this.size > this.minSize){
                    this.size -= .1
                }
                if(this.size < 0) this.size = 0
            }
        }
        
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = 'black'
        ctx.strokeStyle = 'white'
        ctx.fill()
        ctx.stroke()
    }
}