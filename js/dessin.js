class Dessin{
    constructor(canvas){
        this.draw = false
        this.prevX = 0
        this.prevY = 0

        this.canvas = document.querySelector(canvas)
        this.ctx = this.canvas.getContext("2d")
        this.ctx.strokeStyle = "black"
        this.ctx.lineWidth = 2

        this.canvas.addEventListener("mousedown", (e) => {
            //je dessine
            this.draw = true

            // je stocke les coordonées d'ou je pars

            this.prevX = (e.clientX - this.canvas.offsetLeft) * 400 / this.canvas.clientWidth
            
            this.prevY = (e.clientY - this.canvas.offsetTop) * 400 / this.canvas.clientHeight
        })

        this.canvas.addEventListener("mousemove", (e) => {
            if(this.draw){
                //on calcule les coordonées
                let currX = (e.clientX - this.canvas.offsetLeft) * 400 / this.canvas.clientWidth
            
                let currY = (e.clientY - this.canvas.offsetTop) * 400 / this.canvas.clientHeight

                //ensuite on dessine
                this.dessine(this.prevX, this.prevY, currX, currY)

                //puis on stocke les nouvelles coordonées
                this.prevX = currX
                this.prevY = currY
            }
        })



        this.canvas.addEventListener("mouseup", () => {
            this.draw = false
        })
        this.canvas.addEventListener("mouseout", () => {
            this.draw = false
        })




    }

    dessine(depX, depY, destX, destY){
        this.ctx.beginPath()
        this.ctx.moveTo(depX, depY)
        this.ctx.lineTo(destX, destY)
        this.ctx.closePath()
        this.ctx.stroke()

    }

//changement de couleur

    setColor(color){
        this.ctx.strokeStyle = color
    }

    //agrandissement taille

    biggerStroke(){
        this.ctx.lineWidth++
    }



    smallerStroke(){
        this.ctx.lineWidth = (this.ctx.lineWidth > 1 ) ? this.ctx.lineWidth - 1 : 1
    }

    erase(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }


}