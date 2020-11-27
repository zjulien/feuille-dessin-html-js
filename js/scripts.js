window.onload = () => {
    // on crée la palette de couleur
    document.querySelectorAll('#palette div').forEach(element =>
        {
            //on met les couleurs
            element.style.backgroundColor = element.dataset.color 


            //on écoute le click

            element.addEventListener("click", () => {
                canvas.setColor(element.dataset.color)
            })

     })

     // on charge le canvas

     let canvas = new Dessin("#feuille")


     //clicke sur le plus (augmenter le trait)
     document.querySelector("#plus").addEventListener("click", () =>{
         canvas.biggerStroke()
     })

     //clicke sur le moins(diminu largeur du trait)
     document.querySelector("#moins").addEventListener("click", () => {
         canvas.smallerStroke()
     } )


//clicke sur la gomme
document.querySelector("#gomme").addEventListener("click", () => {
    canvas.setColor("white")
} )

//clicke sur la croix
document.querySelector("#effacer").addEventListener("click", () => {
    canvas.erase()
} )


}