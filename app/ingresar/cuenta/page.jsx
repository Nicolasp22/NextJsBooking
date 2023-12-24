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
         let div = document.querySelector(".lista-productos ")
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
  <div className="hi">
    <img src="../iconos/building.svg" alt="" />
    <Link id="link1" href="./departamentos">Departamentos</Link> </div>
  <div className="ho">
    <img src="../iconos/houses.svg" alt="" />
    <Link id="link2" href="./mansiones">Mansiones</Link> </div>
  <div className="cierre" onClick={cerrar}> Cerrar </div>
   </div>

    <div className="lista-cuenta"> 
 <div className="perfil">
    <img src="../iconos/person.svg" alt="" />
    <Link href="./cuenta" id="link3"> Mi perfil </Link> </div>
 <div className="conf">
    <img src="../iconos/gear.svg" alt="" />
    <Link href="g" id="link4"> Configuración </Link> </div>
 <div className="cierre2" onClick={Cierre}>Cerrar</div>
   </div>

  </div>

        </>
    )
}