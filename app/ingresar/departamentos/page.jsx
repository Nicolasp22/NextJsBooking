"use client"
// import { log } from "console"; 
import "./style.css"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Departamentos () { 
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
   
    
    
    let Comprar1 = () => {
        // let title = document.querySelector("h1"); 
        window.confirm(`¿Estas seguro de que quieres alquilar este departamento por $${count1*precio1} pesos?` )
    }
    let Comprar2 = () => {
        // let title = document.querySelector("h1"); 
        window.confirm(`¿Estas seguro de que quieres alquilar este departamento por $${count2*precio2} pesos?` )
    }
    let Comprar3 = () => {
        // let title = document.querySelector("h1"); 
        window.confirm(`¿Estas seguro de que quieres alquilar este departamento por $${count3*precio3} pesos?` )
    }
    let Comprar4 = () => {
        // let title = document.querySelector("h1"); 
        window.confirm(`¿Estas seguro de que quieres alquilar este departamento por $${count4*precio4} pesos?` )
    }
    
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);
    const [count4, setCount4] = useState(1);
    let precio1 = 10000;
    let precio2 = 15000;
    let precio3 = 13000;
    let precio4 = 20000;
console.log(count1, count2, count3, count4);

    return ( 
        <>
<div className="nav">
 <h2 className="networking">Networking</h2>
 <h2 className="nosotros"> <Link className="nos" href="A">Nosotros</Link> </h2>
 <h2 id="productos" onClick={menu} className="productos">Productos</h2>
 <h2 onClick={Cuenta} className="micuenta">Mi cuenta</h2>
 </div>
 <div className="listas"> 


<div className="lista-productos"> 
<div className="ho">
    <img src="../iconos/houses.svg" alt="" />
    <Link id="link2" href="./mansiones">Mansiones</Link> </div>
<div className="hi"><Link id="link1" href="./cuenta">Inicio</Link> </div>
<div className="cierre" onClick={cerrar} >Cerrar</div>
</div>

 <div className="lista-cuenta"> 
<div className="perfil">
    <img src="../iconos/person.svg" alt="" />
    <Link href="./cuenta" id="link3"> Mi perfil </Link> </div>
<div className="conf">
    <img src="../iconos/gear.svg" alt="" />
    <Link href="./cuenta" id="link4"> Configuración </Link> </div>
<div className="cierre2" onClick={Cierre} >Cerrar</div>
</div>

</div>
{/* Hasta aca cabecera */}

<h1 className="title">Departamentos</h1>


<div className="casas"> 
<div className="grilla1"> 
     <h1 className="titulo">Habitación en Honolulu Hawái, Estados Unidos  </h1> 
     <div className="casa1">
    <img src="../depto1/frente.webp" alt="" />
    <img src="../depto1/cama.jpg" alt="" />
    <img src="../depto1/cocina.webp" alt="" />
    <img src="../depto1/pileta.webp" alt="" />
    <img src="../depto1/pileta2.webp" alt="" />   
    </div>
<p className="descripcion1">Este hermoso condominio totalmente renovado ubicado en Waikiki - Oceanfront cuenta con materiales de primera calidad como mostrador de granito, equipo de acero inoxidable, TV y DVD, escritorio de trabajo con Internet, refrigerador, estufa, horno, horno microondas.
Y los mejores lugares, lugares, lugares. Esta unidad puede ver el mar directamente desde la colina del piso 21. El condominio de 500 pies cuadrados con una enorme terraza de 120 pies cuadrados tiene muebles de lujo, de estilo moderno. El condominio tiene sistema de aire acondicionado dividido, Internet de alta velocidad gratuita, TV por cable y servicio telefónico gratuito a todos los EE. UU. y Canadá.
 </p>
    <div className="botones"> Días de estadía   
    <button onClick={() => setCount1(count1 + 1)}>+</button>
    {count1}
    <button onClick={() => { if(count1 > 1) { setCount1(count1 - 1) } } }>-</button>
    Fecha de inicio
    <input type="date"/>
    </div>
    <button onClick={Comprar1} className="boton">Alquilar</button> 

</div>

<div className="grilla1">  
    <h1 className="titulo">Estudio Penthouse East 50s with Roof Terrace</h1>  
    <div className="casa2">
    <img src="../depto2/living.webp" alt="" />
    <img src="../depto2/muebles.webp" alt="" />
    <img src="../depto2/cocina.webp" alt="" />
    <img src="../depto2/cama.webp" alt="" />
    <img src="../depto2/pileta.webp" alt="" />
    </div>
<p className="descripcion1">Este es un estudio totalmente amueblado en el ático del sexto piso de un edificio con ascensor en el corazón del centro de Manhattan. La terraza de la azotea de las fotos es exclusiva del alojamiento. 
El estudio tiene poco menos de 300 pies cuadrados y es básicamente una encantadora habitación de hotel privada con baño de mármol. Dormirás profundamente con un colchón de espuma viscoelástica, ventanas de dos plazas, ventilador de techo y un excelente aire acondicionado y calefacción, controlado por ti. Hay café y té, pero no cocina ni utensilios de cocina. Dicho esto, ¡no necesitas cocina cuando algunos de los mejores alimentos del mundo están justo afuera de la puerta!
</p>
   
    <div className="botones"> 
    <div className="txt">Dias de estadía </div>  
    <button onClick={() => setCount2(count2 + 1) }>+</button>
    {count2}
    <button onClick={() => { if(count2 > 1) { setCount2(count2 - 1) } }}>-</button>
    Fecha de inicio
    <input type="date" />
    </div>
    <button onClick={Comprar2} className="boton">Alquilar</button>

</div>

<div className="grilla2"> 
    <h1 className="titulo">Habitación en Mackinac Island, Míchigan, Estados Unidos</h1> 
    <div className="casa3">
    <img src="../depto3/frente.webp" alt="" />
    <img src="../depto3/cocina.webp" alt="" />
    <img src="../depto3/cama.webp" alt="" />
    <img src="../depto3/gym.webp" alt="" />
    <img src="../depto3/muebles.webp" alt="" />
    <img src="../depto3/pileta.webp" alt="" />
    </div>
<p className="descripcion2">Applewood 204 está muy bien equipada, habitación del segundo piso con excelentes vistas diurnas y nocturnas del estrecho de Mackinac y el puente Mackinac. Ubicado a dos millas de la ciudad en el lado oeste de la isla, estás estratégicamente posicionado para terminar el día viendo la puesta de sol, las estrellas salen y las luces brillan en el puente Mackinac y al otro lado del agua en Saint Ignace, todo desde la comodidad del apartamento.
Equipado con una cama tamaño king de hierro forjado, baño completo, mininevera, microondas, cafetera y wifi.</p>
  
    <div className="botones"> 
    <div className="txt">Dias de estadía </div>  
    <button onClick={() => { setCount3(count3 + 1) }}>+</button>
    {count3}
    <button onClick={() => { if(count3 > 1) { setCount3(count3 - 1) } } }>-</button>
    Fecha de inicio
    <input type="date" />
    </div>
    <button onClick={Comprar3} className="boton">Alquilar</button>

</div>

<div className="grilla2"> 
    <h1 className="titulo">Habitación en Knoxville Tennessee, Estados Unidos</h1> 
    <div className="casa4"> 
    <img id="1" src="../depto4/estar.webp" alt="" />
    <img id="2" src="../depto4/cocina.webp" alt="" />
    <img id="3" src="../depto4/habitacion.webp" alt="" />
    <img src="../depto4/camas dobles.webp" alt="" />
    <img src="../depto4/balcon.webp" alt="" />
    <img src="../depto4/pileta.webp" alt="" />
    </div>
<p className="descripcion2">
Habitación privada ubicada en una casa adosada de 3 dormitorios y 1,5 baños ubicada en el histórico Knoxville del Norte. Conveniente a 4th y a Gill, a Happy Holler, y a la zona céntrica Knoxville. Este dormitorio privado tiene una puerta de bloqueo, cama completa, televisión y espacio de trabajo. Los espacios compartidos incluyen sala de estar, cocina, 1,5 baños. La casa está equipada con una cocina totalmente equipada, wifi, sala de estar, estacionamiento en el lugar, y también se proporciona café. Hay lavandería de pago disponible para todos los huéspedes.
</p>

    <div className="botones">  
    <div className="txt">Dias de estadía </div>  
    <button onClick={() => {  setCount4(count4 + 1) } }>+</button>
    {count4}
    <button onClick={() => { if(count4 > 1) { setCount4(count4 - 1) } } }>-</button>
    Fecha de inicio
    <input type="date" />
    </div>
    <button onClick={Comprar4} className="boton">Alquilar</button>

</div>


       </div>
        </>
    )
} 