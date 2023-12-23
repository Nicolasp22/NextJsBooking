
// import Dolar from "../cuenta/function"



export default function Dialog () {
  let menu = () => { 
    let botones = document.querySelector(".hi")
    let buttons = document.querySelector(".ho")
    let cerrar = document.querySelector(".cierre")
    
    botones.style.display = "flex";
    buttons.style.display = "flex";
    cerrar.style.display = "flex";
    } 
    
   let cerrar = () => {
     let boton = document.querySelector(".hi")
     let button = document.querySelector(".ho")
     let cierre = document.querySelector(".cierre")

    boton.style.visibility = "hidden";
    button.style.visibility = "hidden";
    cerrar.style.visibility = "hidden";
   
   }
}

