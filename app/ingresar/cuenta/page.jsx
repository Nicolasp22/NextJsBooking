import "./style.css"
// import Link from "next/link" 
// import Mostrar from "../api/page"
// import Dolar from "./function" 

// import { useState } from "react"; 


export default function Cuenta () {
    return(
        <>
       <div className="nav">
 <h2 className="networking">Networking</h2>
 <h2 className="nosotros">Nosotros</h2>
 <h2 id="productos" className="productos">Productos </h2>
  <div id="favDialog"> 
  <li className="">Deptos</li>
  <li className="">Mansiones</li>
  </div>
 <h2 className="micuenta">Mi cuenta</h2>
       </div>

{/* <Dolar/>        */}
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
{/* <p className="titulom1">Mansion ubicada en </p>  */}
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