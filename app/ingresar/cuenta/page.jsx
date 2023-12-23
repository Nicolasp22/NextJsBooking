"use client";
import Link from "next/link";
import "./style.css"




export default function Cuenta () {

    let menu = () => { 
        let botones = document.querySelector(".hi")
        let buttons = document.querySelector(".ho")
        let cerrar = document.querySelector(".cierre")
        let div = document.querySelector(".lista-productos")
        

        botones.style.visibility = "visible";
        buttons.style.visibility = "visible";
        cerrar.style.visibility = "visible";
        div.style.visibility = "visible";
        

        } 
        
    let cerrar = () => {
         let boton = document.querySelector(".hi")
         let button = document.querySelector(".ho")
         let cerrar = document.querySelector(".cierre")
         let div = document.querySelector(".lista-productos")
        boton.style.visibility = "hidden";
        button.style.visibility = "hidden";
        cerrar.style.visibility = "hidden";
        div.style.visibility = "hidden";
       }

    let Cuenta = () => {
        let cuenta = document.querySelector(".lista-cuenta")
        let ca = document.querySelector(".cierre2")
        cuenta.style.visibility = "visible";
        ca.style.visibility = "visible";
        
        }
    let Cierre = () => {
        let close = document.querySelector(".lista-cuenta")
        let ca = document.querySelector(".cierre2")
        close.style.visibility = "hidden";
        ca.style.visibility = "hidden";
    }    
           return(
        <>
       
       <div className="nav">
 <h2 className="networking">Networking</h2>
 <h2 className="nosotros"> <Link className="nos" href="A">Nosotros</Link> </h2>
 <h2 id="productos" onClick={menu} className="productos">Productos</h2>
 <h2 onClick={Cuenta} className="micuenta">Mi cuenta</h2>
 </div>
 <div className="listas"> 


   <div className="lista-productos"> 
  <div className="hi"><Link id="link1" href="a">Deptos</Link> </div>
  <div className="ho"><Link id="link2" href="a">Mansiones</Link> </div>
  <div className="cierre" onClick={cerrar}>Cerrar</div>
   </div>

    <div className="lista-cuenta"> 
 <div className="perfil"><Link href="g" id="link3"> Mi perfil </Link> </div>
 <div className="conf"><Link href="g" id="link4"> Configuraciones </Link> </div>
 <div className="cierre2" onClick={Cierre}>Cerrar</div>
   </div>

  </div>

       <div className="casas"> 
<div className="casa1">
    <img src="../depto1/frente.webp" alt="" />
    <img src="../depto1/cama.jpg" alt="" />
    <img src="../depto1/cocina.webp" alt="" />
    <img src="../depto1/pileta.webp" alt="" />
    <img src="../depto1/pileta2.webp" alt="" />
</div>

<div className="casa2">
    <img src="../depto2/living.webp" alt="" />
    <img src="../depto2/muebles.webp" alt="" />
    <img src="../depto2/cocina.webp" alt="" />
    <img src="../depto2/cama.webp" alt="" />
    <img src="../depto2/pileta.webp" alt="" />
</div>

<div className="casa3">
    <img src="../depto3/frente.webp" alt="" />
    <img src="../depto3/cocina.webp" alt="" />
    <img src="../depto3/cama.webp" alt="" />
    <img src="../depto3/gym.webp" alt="" />
    <img src="../depto3/muebles.webp" alt="" />
    <img src="../depto3/pileta.webp" alt="" />
</div>

<div className="casa4">
    <img id="1" src="../depto4/estar.webp" alt="" />
    <img id="2" src="../depto4/cocina.webp" alt="" />
    <img id="3" src="../depto4/habitacion.webp" alt="" />
    <img src="../depto4/camas dobles.webp" alt="" />
    <img src="../depto4/balcon.webp" alt="" />
    <img src="../depto4/pileta.webp" alt="" />
</div>

<div className="mansion1">
    <img src="../mansion1/frente.webp" alt="" />
    <img src="../mansion1/otra.webp" alt="" />
    <img src="../mansion1/cocina.webp" alt="" />
    <img src="../mansion1/living.webp" alt="" />
    <img src="../mansion1/estar.webp" alt="" />
    <img src="../mansion1/comedor.webp" alt="" />
    <img src="../mansion1/habitacion.webp" alt="" />
    <img src="../mansion1/camas dobles.webp" alt="" />
</div>

<div className="mansion2">
    <img src="../mansion2/frente.webp" alt="" />
    <img src="../mansion2/habitacion.webp" alt="" />
    <img src="../mansion2/cocina.webp" alt="" />
    <img src="../mansion2/comedor.webp" alt="" />
    <img src="../mansion2/pool.webp" alt="" />
    <img src="../mansion2/spa.webp" alt="" />
    <img src="../mansion2/comedor2.webp" alt="" />
    
</div>
       </div>
        </>
    )
}