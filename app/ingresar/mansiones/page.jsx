"use client"
import "./style.css"
import Link from "next/link"


export default function Mansiones () {
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
<div className="hi">
    <img src="../iconos/building.svg" alt="" />
    <Link id="link1" href="./departamentos">Departamentos</Link> </div>
<div className="ho">
    {/* <img className="arrow" src="../iconos/arrow-left.svg" alt="" />  */}
    <Link id="link2" href="./cuenta">Inicio</Link> </div>
<div className="cierre" onClick={cerrar} >Cerrar</div>
</div>

 <div className="lista-cuenta"> 
<div className="perfil">
    <img src="../iconos/person.svg" alt="" />
    <Link href="./cuenta" id="link3"> Mi perfil </Link> </div>
<div className="conf">
    <img src="../iconos/gear.svg" alt="" />
    <Link href="g" id="link4"> Configuración </Link> </div>
<div className="cierre2" onClick={Cierre} >Cerrar</div>
</div>

</div>
{/* Hasta aca cabecera */}

        <div className="mansiones">
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
<div className="mansion3">
    <img src="../mansion3/aereo.webp" alt="" />
    <img src="../mansion3/frente.webp" alt="" />
    <img src="../mansion3/cocina.webp" alt="" />
    <img src="../mansion3/comedor.webp" alt="" />
    <img src="../mansion3/habitacion.webp" alt="" />
    <img src="../mansion3/estar.webp" alt="" />
    <img src="../mansion3/pileta.webp" alt="" />
    
</div>
<div className="mansion4">
    <img src="../mansion4/aereo.webp" alt="" />
    <img src="../mansion4/frente.webp" alt="" />
    <img src="../mansion4/comedor.webp" alt="" />
    <img src="../mansion4/estar.webp" alt="" />
    <img src="../mansion4/sala.webp" alt="" />
    <img src="../mansion4/habitacion.webp" alt="" />
    <img src="../mansion4/habitacion2.webp" alt="" />
    
</div>
        </div>
</>
    )
}